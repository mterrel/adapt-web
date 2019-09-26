#!/usr/bin/env bash

set -e

SERVER_PORT=9999
WEBSITE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
NGINX_CONF_SRC="${WEBSITE_DIR}/scripts/static_nginx.conf"
NGINX_CONF="${WEBSITE_DIR}/build/nginx.conf"
WEBSITE_ROOT="${WEBSITE_DIR}/build/adapt"

onExit() {
    if [[ -n "${STOP_SERVER[@]}" ]]; then
        echo Stopping server
        "${STOP_SERVER[@]}"
    fi
}
trap onExit INT TERM HUP EXIT

checkServer() {
    curl --head http://localhost:${SERVER_PORT}/ >& /dev/null
}

# Replace template params in the config
# Usage:
#   writeConfig website_root_value server_port value
#
writeConfig() {
    CONF=$(<"${NGINX_CONF_SRC}")
    CONF="${CONF//WEBSITE_ROOT/$1}"
    CONF="${CONF//SERVER_PORT/$2}"
    echo "${CONF}" > "${NGINX_CONF}"
}

nginxLocal() {
    local NGINX

    if ! which nginx >& /dev/null ; then
        return 1;
    fi

    writeConfig "${WEBSITE_ROOT}" "${SERVER_PORT}"

    NGINX=(nginx -c "${NGINX_CONF}")
    echo Running: ${NGINX[@]}
    "${NGINX[@]}"
    STOP_SERVER=(nginx -c "${NGINX_CONF}" -s quit)
}

nginxContainer() {
    local NGINX CTR

    writeConfig /www 80

    NGINX=(
        docker run --rm --name nginx-link-check -d
        -v "${WEBSITE_ROOT}:/www:ro"
        -v "${NGINX_CONF}:/etc/nginx/nginx.conf:ro"
        -p ${SERVER_PORT}:80
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
    broken-link-checker -r --filter-level 3 \
        --exclude localhost:8080 \
        --exclude localhost:3000 \
        --exclude https://adaptjs.org/blog/atom.xml \
        --exclude https://adaptjs.org/blog/feed.xml \
        http://localhost:${SERVER_PORT} || \
        echo "Link check FAILED"
}

checkLinks() {
    BROKEN=()
    while IFS= read -r line; do
        case "${line}" in
            "Getting links from"*)
                # New page. Print out any errors from the previous one and
                # reset for the next.
                if [[ ${#BROKEN[@]} -ne 0 ]]; then
                    echo "${CUR_PAGE}"
                    printf "%s\n" "${BROKEN[@]}"
                    BROKEN=()
                fi
                CUR_PAGE="${line}"
                ;;

            ├─BROKEN─*)
                BROKEN+=("${line}")
                FOUND_BROKEN=true
                ;;

            Finished*)
                FINISHED=${line}
                ;;

            *─OK─*|"")
                # Filter out all the OK links and blank lines
                ;;

            "Link check FAILED")
                FAILED=true
                ;;

            *)
                echo "${line}"
                ;;
        esac
    done < <(checkLinkCommand)

    echo "${FINISHED}"
    if [[ -n $FOUND_BROKEN ]]; then
        printf "\033[01;31m%s\033[m\n" "ERROR: Broken links found"
        return 1
    elif [[ -n $FAILED ]]; then 
        printf "\033[01;31m%s\033[m\n" "ERROR: Link checking failed"
        return 1
    else
        printf "\033[01;32m%s\033[m\n" "Success! No broken links"
        return 0
    fi
}

runServer
checkLinks || exit 1
