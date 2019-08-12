#!/usr/bin/env bash

BUILD_OUT=$(mktemp --tmpdir docusaurus-build.XXXXXX)
trap 'rm -f -- "${BUILD_OUT}"' INT TERM HUP EXIT

# Allow color output when running build by using 'script' to create a pty
faketty() {
    script --quiet --return --flush --command "$(printf "%q " "$@")" ${BUILD_OUT}
}

error() {
    printf "\n\033[01;31m%s\033[m\n\n" "$*"
}

faketty docusaurus-build

NDOCS=$(grep -c '\[WARN\] unresolved links' ${BUILD_OUT})
if [[ $NDOCS != "0" ]]; then
    error ERROR: Unresolved links in ${NDOCS} documents during website build
    exit 1
fi
