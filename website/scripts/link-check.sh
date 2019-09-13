#!/usr/bin/env bash

set -e

SERVER_PORT=9999

onExit() {
    if [[ -n ${SERVER_PID} ]]; then
        kill ${SERVER_PID}
    fi
}
trap onExit INT TERM HUP EXIT

checkServer() {
    curl --head http://localhost:${SERVER_PORT}/ >& /dev/null
}

runServer() {
    local i
    echo Starting server

    # Wait for about 90 sec
    i=90

    docusaurus-start --no-watch --port ${SERVER_PORT} &
    SERVER_PID=$!
    while ! checkServer ; do
        if [[ i -le 0 ]]; then
            echo ERRROR: Server did not become ready
            exit 1
        fi
        ((i=i-1))
        echo Waiting on server...
        sleep 1
    done
    echo Server is up
}

checkLinkCommand() {
    # NOTE(mark): Remove exclude for github page once it's public
    broken-link-checker -r --filter-level 3 \
        --exclude localhost:8080 \
        --exclude localhost:3000 \
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
