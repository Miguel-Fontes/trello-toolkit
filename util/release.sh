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
# Version 2: - Releases directly to a GitHub release, created by this script
#
# Depends On:
#   - npm
#   - semver
#   - git
#   - google-chrome
#   - curl
#   - tar
#   - jq
#
# Environment Configuration
#   - CHROME_EXTENSIONS_PEM: path to .pem file, used on crx generation
#   - GITHUB_OAUTH_TOKEN: a GITHUB oauth token, with access to create releases
#
# Future Features
#   - Send release description to github, obtaining it from the CHANGELOG
#   - Generalize script, extracting reusable concepts when adequate
#
# Future Improvements
#   - Validate if semver is installed
#   - Use semver globally, if available
#
# Miguel Fontes, 2018-07

declare -r USAGE="
    $(basename "$0")

    USAGE: release (patch | minor | major)
           release patch
           release minor
           release major
"

declare -r PEM_FILE="$CHROME_EXTENSIONS_PEM"
declare -r TOKEN="$GITHUB_OAUTH_TOKEN"
declare -r RELEASE_TYPE=$1
declare -r CURRENT_VERSION=$(grep -E version package.json | cut -d':' -f 2 | sed -e "s/ //g" -e "s/\"//g" -e "s/,//g")
declare    NEXT_VERSION
declare    GITHUB_RELEASE_ID

declare -r TYPE_MAJOR="major"
declare -r TYPE_MINOR="minor"
declare -r TYPE_PATCH="patch"

declare -r TRUE=0
declare -r FALSE=1

declare -r RED='\033[0;31m'
declare -r DEFAULT='\033[0;0m'

validate() {
    errors="$FALSE";

    if [ -z "$TOKEN" ]; then
        echo -e "${RED}ERROR: TOKEN is not set! Configure a environment variable named GITHUB_OAUTH_TOKEN containing a GitHub token with access to create releases!"
        errors="$TRUE"
    fi

    if [ -z "$PEM_FILE" ]; then
        echo -e "${RED}ERROR: PEM file is not set! Configure a environment variable named CHROME_EXTENSIONS_PEM containing the file path!"
        errors="$TRUE"
    fi

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

getNextVersion() {
    NEXT_VERSION=$(node_modules/semver/bin/semver -i $RELEASE_TYPE $CURRENT_VERSION)
}

bumpManifestVersion () {
    sed -i -- "s/$CURRENT_VERSION/$NEXT_VERSION/g" src/manifest.json
    git stage src/manifest.json
    git commit -m "Bump manifest version to $NEXT_VERSION"
}

npmRelease () {
    npm version "$RELEASE_TYPE"
}

npmBuild () {
    npm run build
}

packExtension() {
    google-chrome --pack-extension=dist --pack-extension-key="$PEM_FILE"
    mv dist.crx dist/trello-toolkit.crx
    tar -cf dist/trello-toolkit.tar.gz -C dist trello-toolkit.crx
}

releaseToGithub() {
    GITHUB_RELEASE=curl -X POST \
      "https://api.github.com/repos/Miguel-Fontes/trello-toolkit/releases?access_token=$TOKEN" \
      -H 'cache-control: no-cache' \
      -H 'content-type: application/json' \
      -d "{
      \"tag_name\": \"$NEXT_VERSION\",
      \"target_commitish\": \"master\",
      \"name\": \"Version $NEXT_VERSION\"
    }"

    GITHUB_RELEASE_ID=$(echo GITHUB_RELEASE | jq .id)
    GITHUB_RELEASE_URL=$(echo GITHUB_RELEASE | jq .url)

    ARTIFACT_URL=$(curl -s --data-binary @"dist/trello-toolkit.tar.gz" \
      -H 'cache-control: no-cache' \
      -H 'content-type: application/octet-stream' \
      "https://uploads.github.com/repos/Miguel-Fontes/trello-toolkit/releases/$GITHUB_RELEASE_ID/assets?access_token=$TOKEN&name=trello-toolkit.tar.gz" | jq .url)

    echo "Artifact successfully uploaded to GitHub! Check the release at $GITHUB_RELEASE_URL, or download directly from $ARTIFACT_URL"
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
    packExtension

    echo "Releasing new version to GitHub..."
    releaseToGithub

    echo "Release done!"
}

main