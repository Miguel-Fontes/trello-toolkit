#!/bin/bash
# Trello Tookit Release Script
#
# Version 1: - Updates manifest.json on src with the version to be released
#            - Infers the current version by reading the version field of package.json
#            - Runs npm version patch, minor or major, based on the previous and next version
#            - Validates inputs, showing a descriptive message if needed
#            - Creates a tar.gz of the release, containing the files built on dist directory
#
# Future Features
#   - Validate if version is bigger than current one
#   - Push release artifact to github releases
#
# Miguel Fontes, 2018-07

declare -r USAGE="
    $0

    USAGE: release <VERSION>
           release 1.0.1
           release 2.0.0
"

declare -r CURRENT_VERSION=$(grep -E version package.json | cut -d':' -f 2 | sed -e "s/ //g" -e "s/\"//g" -e "s/,//g")
declare -r NEXT_VERSION="$1"

declare -r TYPE_MAJOR="major"
declare -r TYPE_MINOR="minor"
declare -r TYPE_PATCH="patch"

declare -r TRUE=0
declare -r FALSE=1

declare -r RED='\033[0;31m'
declare -r DEFAULT='\033[0;0m'

updateManifest () {
    sed -i -- "s/$CURRENT_VERSION/$NEXT_VERSION/g" src/manifest.json
}

validate() {
    if [ -z $1 ]; then
        echo -e "${RED}ERROR: Next version was not informed!"
        echo -e "${DEFAULT}${USAGE}"
        exit 1
    fi
}

main () {
    echo "Trello Toolkit Release Script"
    echo "Current working directory is $(pwd)"

    validate
    echo "Current version is [$CURRENT_VERSION], releasing [$NEXT_VERSION]"

    updateManifest
    let type = getReleaseType

    cat src/manifest.json
}

main





