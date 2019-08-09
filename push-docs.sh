#!/usr/bin/env bash

set -e

function usage {
    cat <<USAGE

Commits and pushes changes to the docs directory.


Usage:
  $0 <ADAPT_REPO> <BRANCHNAME>

  ADAPT_REPO:   Path to the Adapt repo from which to pull the latest docs
  BRANCHNAME:   Branch in adapt-web to commit/push to

  FLAGS:
      -h | --help   Display help for command

Example:
  $0 .. master

USAGE
}

function error {
    printf "\n\033[01;31mERROR: $*\033[m\n\n" >&2
}

function run {
    printf "\n$*\n"
    $@
}


if [[ $(pwd) != $(git rev-parse --show-toplevel) ]]; then
    error MUST be run from the root of the adapt-web repo.
    usage
    exit 1
fi

while [[ $# -gt 0 ]]; do
    case "$1" in
        -h|--help)
            usage
            exit 0
            ;;

        -*)
            error Unrecognized flag: $1
            usage
            exit 1
            ;;

        *)
            if [[ -z $ADAPT_REPO ]]; then
                ADAPT_REPO="$1"
            elif [[ -z $BRANCHNAME ]]; then
                BRANCHNAME="$1"
            else
                error Too many arguments
                usage
                exit 1
            fi
            ;;
    esac
    shift
done

if [[ -z $ADAPT_REPO || -z $BRANCHNAME ]]; then
    error Not enough arguments
    usage
    exit 1
fi

if [[ -z $(git config --get user.name) ]]; then
    if [[ -z ${GIT_USER_NAME} ]]; then
        error Cannot determine git user.name. Set via GIT_USER_NAME environment var.
        exit 1
    fi
    run git config --global user.name "${GIT_USER_NAME}"
fi

if [[ -z $(git config --get user.email) ]]; then
    if [[ -z ${GIT_USER_EMAIL} ]]; then
        error Cannot determine git user.email. Set via GIT_USER_EMAIL environment var.
        exit 1
    fi
    run git config --global user.email "${GIT_USER_EMAIL}"
fi

if [[ -n $(git -C ${ADAPT_REPO} status --porcelain) ]]; then
    error Cannot commit adapt-web changes when adapt has uncommitted changes
    git -C ${ADAPT_REPO} status
    exit 1
fi

ADAPT_COMMIT=$(git -C ${ADAPT_REPO} log -1 --oneline --decorate=short)

# Ensure we're up to date with latest
run git checkout ${BRANCHNAME}
run git pull --ff-only

# Remove any staged changes
run git reset

# Add only the changes in the docs directory
run git add docs/

# Check for changes outside the docs directory
UNSTAGED=$(git status --porcelain | grep -v '^. ')
if [[ -n $UNSTAGED ]]; then
    error Cannot commit adapt-web with changes outside the docs directory
    run git status
    exit 1
fi

# Check for any changes to commit
STAGED=$(git status --porcelain | grep '^. ')
if [[ -z ${STAGED} ]]; then
    printf "\nNo changes to commit\n"
    exit 0
fi

printf "\n\nCommitting the following changes to adapt-web branch ${BRANCHNAME}\n\n"
git status
echo

run git commit -F - <<< "[auto] Updating to adapt commit: ${ADAPT_COMMIT}"
run git push origin ${BRANCHNAME}

