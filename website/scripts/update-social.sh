#!/usr/bin/env bash

WEBSITE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
JS_DIR="${WEBSITE_DIR}/static/js"

# The CSS style "social-count" triggers some ad blockers
curl -q https://buttons.github.io/buttons.js | \
    sed s/social-count/github-count/g > "${JS_DIR}/github.js"
