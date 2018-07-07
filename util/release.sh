#!/bin/bash
# Trello Tookit Release Script - Version 1
# Orquestrate a version release of this projects, making sure all files are syncronized (on the same version).
#
#
# Version 1: - Updates manifest.json on src with the version to be released
#            - Infers the current version by reading the version field of package.json
#            - Defines the next level by using the release level (patch, minor, or major)
#            - Runs npm version based on release level informed
#            - Validates inputs, showing a descriptive message if needed
#            - Creates a tar.gz of the release, containing the files built on dist directory
#
# Depends On:
#   - npm
#   - semver
#   - git
#
# Future Features
#   - Validate if version is bigger than current one
#   - Push release artifact to github releases
#
# Future Improvements
#   - Validate if semver is installed
#   - Use semver globally, if available
#
# Miguel Fontes, 2018-07

declare -r USAGE="
    $(basename $0)

    USAGE: release (patch | minor | major)
           release patch
           release minor
           release major
"

declare -r RELEASE_TYPE=$1
declare -r CURRENT_VERSION=$(grep -E version package.json | cut -d':' -f 2 | sed -e "s/ //g" -e "s/\"//g" -e "s/,//g")
declare    NEXT_VERSION

declare -r TYPE_MAJOR="major"
declare -r TYPE_MINOR="minor"
declare -r TYPE_PATCH="patch"

declare -r TRUE=0
declare -r FALSE=1

declare -r RED='\033[0;31m'
declare -r DEFAULT='\033[0;0m'

getNextVersion() {
    NEXT_VERSION=$(node_modules/semver/bin/semver -i $RELEASE_TYPE $CURRENT_VERSION)
}

bumpManifestVersion () {
    sed -i -- "s/$CURRENT_VERSION/$NEXT_VERSION/g" src/manifest.json
    git stage src/manifest.json
    git commit -m "Bump manifest version to $NEXT_VERSION"
}

validate() {
    errors="$FALSE";

    if [ -z "$RELEASE_TYPE" ]; then
        echo -e "${RED}ERROR: Release Type was not informed!"
        errors="$TRUE"
    fi

    if [ "$TYPE_PATCH" != "$RELEASE_TYPE" -a "$TYPE_MINOR" != "$RELEASE_TYPE" -a "$TYPE_MAJOR" != "$RELEASE_TYPE" ]; then
        echo -e "${RED}ERROR: Invalid Release Type was informed!"
        errors="$TRUE"
    fi

    if [ $errors -eq $TRUE ]; then
        echo -e "${DEFAULT}${USAGE}"
        exit 1
    fi
}

npmRelease () {
    npm version $RELEASE_TYPE
}

npmRelease () {
    npm run build
}

main () {
    echo "Trello Toolkit Release Script"
    echo "Current working directory is $(pwd)"

    validate
    getNextVersion
    echo "Current version is [$CURRENT_VERSION], releasing [$NEXT_VERSION]"

    bumpManifestVersion
    npmRelease
    npmBuild
}

main





