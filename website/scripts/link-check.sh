#!/usr/bin/env bash

set -e

SERVER_PORT=9999
WEBSITE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
NGINX_CONF_SRC="${WEBSITE_DIR}/scripts/static_nginx.conf"
NGINX_CONF="${WEBSITE_DIR}/build/nginx.conf"
WEBSITE_ROOT="${WEBSITE_DIR}/build/adapt"
SERVER_NAME="nginx-link-check"
NET_NAME="link_check"

onExit() {
    if [[ -n "${STOP_SERVER[@]}" ]]; then
        echo Stopping server
        "${STOP_SERVER[@]}"
    fi
}
trap onExit INT TERM HUP EXIT

useDocker() {
    docker info >& /dev/null
}

checkServer() {
    curl --head http://localhost:${SERVER_PORT}/ >& /dev/null
}

createNetwork() {
    # Don't create if it already exists
    docker network inspect "${NET_NAME}" >/dev/null && return
    docker network create "${NET_NAME}"
}

selfContainer() {
    head -1 /proc/self/cgroup | cut -d/ -f 3
}

connectToNetwork() {
    local SELF=$(selfContainer)
    if ! useDocker || [ -z "${SELF}" ]; then
        return
    fi

    docker network connect "${NET_NAME}" "${SELF}" || true
}

# Replace template params in the config
# Usage:
#   writeConfig website_root_value server_port value
#
writeConfig() {
    CONF=$(<"${NGINX_CONF_SRC}")
    CONF="${CONF//WEBSITE_ROOT/$1}"
    CONF="${CONF//SERVER_PORT/${SERVER_PORT}}"
    echo "${CONF}" > "${NGINX_CONF}"
}

nginxLocal() {
    local NGINX

    if ! which nginx >& /dev/null ; then
        return 1;
    fi

    writeConfig "${WEBSITE_ROOT}"

    NGINX=(nginx -c "${NGINX_CONF}")
    echo Running: ${NGINX[@]}
    "${NGINX[@]}"
    STOP_SERVER=(nginx -c "${NGINX_CONF}" -s quit)
    # Since we're running the nginx server locally, set to this
    # container's hostname for the case that the client runs in a
    # container too. Will be overwritten if client is also local.
    SERVER_NAME=$(hostname)
}

nginxContainer() {
    local NGINX CTR

    createNetwork

    writeConfig /www

    NGINX=(
        docker run --rm --name "${SERVER_NAME}" -d
        -v "${WEBSITE_ROOT}:/www:ro"
        -v "${NGINX_CONF}:/etc/nginx/nginx.conf:ro"
        -p ${SERVER_PORT}:${SERVER_PORT}
        --network "${NET_NAME}"
        nginx
    )
    echo Running: ${NGINX[@]}
    CTR=$(${NGINX[@]})
    STOP_SERVER=(docker stop "${CTR}")
}

runServer() {
    local i
    echo Starting server

    # Wait for about 90 sec
    i=90

    nginxLocal || nginxContainer

    while ! checkServer ; do
        if [[ i -le 0 ]]; then
            echo ERROR: Server did not become ready
            exit 1
        fi
        ((i=i-1))
        echo Waiting on server...
        sleep 1
    done
    echo Server is up
}

checkLinkCommand() {
    local CHECKER CHECKER_ARGS
    if which muffet >& /dev/null ; then
        CHECKER=(muffet)
        SERVER_NAME=localhost
    else
        CHECKER=(
            docker run
            --rm
            --network "${NET_NAME}"
            raviqqe/muffet
        )
    fi
    CHECKER_ARGS=(
        --ignore-fragments
        # Shared CI doesn't like default (high) concurrency
        --concurrency 20
        --timeout 20
        --skip-tls-verification
        --exclude localhost:8080
        --exclude localhost:3000
        --exclude gitlab.com/unboundedsystems/adapt/pipelines/new
        --exclude www.amazon.com/s
        "http://${SERVER_NAME}:${SERVER_PORT}"
    )
    echo Running: ${CHECKER[@]} ${CHECKER_ARGS[@]}
    ${CHECKER[@]} ${CHECKER_ARGS[@]}
}

checkLinks() {
    if ! checkLinkCommand; then
        printf "\033[01;31m%s\033[m\n" "ERROR: Link checking failed"
        return 1
    else
        printf "\033[01;32m%s\033[m\n" "Success! No broken links"
        return 0
    fi
}

runServer
connectToNetwork
checkLinks || exit 1
