#!/usr/bin/env bash

set -o errexit

function usage {
    cat <<USAGE

Applies changes made to the docs directory ("next" version) to another version
of docs.

$0 <COMMIT> <VERSION>

COMMIT    Any git commit-ish. Only one commit will be applied.
VERSION   The version of docs to apply the commit to.

Example:
  $0 HEAD 0.1.0

USAGE
}

if [[ $# -ne 2 ]]; then
    echo "ERROR: Wrong number of arguments"
    usage
    exit 1
fi

COMMIT="$1"
VERSION="$2"

# Options info:
# -n1           Create the patch for only 1 commit
# -p2           Remove two leading path components from the diff path
# --directory   Prepends a directory to the diff path
git format-patch -n1 "${COMMIT}" --stdout | \
    git apply -p2 --directory="website/versioned_docs/version-${VERSION}" -

printf "\nCommit applied successfully\n"
