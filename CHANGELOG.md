# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

* Test engine to Jest, removing Jasmine from project


## [v1.3.0] - 2018-07-18

### Fixed

- Problem where the badge was presented on full width, below the list name

## [v1.2.4] - 2018-07-15

### Changed

- Release script now shows the created release URL

### Fixed

- Release doesn't print Github response, when uploading the artifact

## [v1.2.0] - 2018-07-15

### Added

- CSS styling for card counter!

## Changed

- A great deal of refactors on tests for better reusability
- Usage of dom methods for getting and setting attributes

## [v1.1.3] - 2018-07-15

### Changed

- Extracted dom dependencies from application objects, making testing and general development life easier.

## [v1.1.2] - 2018-07-13

### Added

- The release script, automagically creates a github release and deploys the artifact

## [v1.1.1] - 2018-07-12

### Fixed

- Now the card counter will correctly update when a card is archived

## [v1.1.0] - 2018-07-10

### Added

- Automatically updates the counter when cards are added/removed from lists

### Changed

- Required access reduced to only to Trello Board Pages
- Better description for te extension

### Fixed

- The extension now runs only on Trello Board Pages (was running on all Trello pages).

## [v1.0.1] - 2018-07-07

### Added

- Release script, making it way easier to release a new version (check README for info).

### Fixed

- Manifest version number was set to 0.1.0, corrected to 1.1.0.

## [v1.0.0] - 2018-07-07

### Added

- Card Counter feature, showing the number of cards on each Trello List Header.

[Unreleased]: https://github.com/Miguel-Fontes/trello-toolkit/compare/v1.3.0...HEAD
[v1.3.0]: https://github.com/Miguel-Fontes/trello-toolkit/compare/v1.2.4...v1.3.0
[v1.2.4]: https://github.com/Miguel-Fontes/trello-toolkit/compare/v1.2.0...v1.2.4
[v1.2.0]: https://github.com/Miguel-Fontes/trello-toolkit/compare/v1.1.3...v1.2.0
[v1.1.3]: https://github.com/Miguel-Fontes/trello-toolkit/compare/v1.1.2...v1.1.3
[v1.1.2]: https://github.com/Miguel-Fontes/trello-toolkit/compare/v1.1.1...v1.1.2
[v1.1.1]: https://github.com/Miguel-Fontes/trello-toolkit/compare/v1.1.0...v1.1.1
[v1.1.0]: https://github.com/Miguel-Fontes/trello-toolkit/compare/v1.0.1...v1.1.0
[v1.0.1]: https://github.com/Miguel-Fontes/trello-toolkit/compare/v1.0.0...v1.0.1
[v1.0.0]: https://github.com/Miguel-Fontes/trello-toolkit/releases/tag/v1.0.0
