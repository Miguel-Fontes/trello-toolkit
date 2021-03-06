# Trello Toolkit

Treelo Toolkit is a chrome extension that adds helpful information on Trello board view.

## Motivation

I am a big Trello user and fan, using it for things ranging from Work to Taking notes about random subjects. I think everyone who uses Trello everyday, ultimately discover some simple limitations like, checking how many cards we have on a list. So, i thought to myself, heck, i'm a developer! What if i could inject some simple custom features on Trello? Javascript is not my specialty but, WE CAN DO THIS! The nice Trello guys have already done the heavy lifting, i just need to sprinkle some sugar. On that day, this pet project was born.

## Installation

So, you want to install this tool on your browser? Nice!

1. Download the [most recent release](https://github.com/Miguel-Fontes/trello-toolkit/releases/download/v1.0.0/trello-toolkit.tar.gz);
2. Unpack it on your favorite directory;
3. Access `chrome://extensions/` on your Chrome Browser;
4. Drag and drop the `trello-toolkit.crx` file on chrome extension window;
5. Accept the installation;
6. Go to [Trello](https://trello.com/) and... nah that's it. Profit!

## Features

### Number of cards on each list

First things first. Aren't you tired of turning filter up just to check the number of cards on each list? I am! So, with `trello-toolkit` the card count is always visible.

![Card Counter](https://user-images.githubusercontent.com/15656072/42738198-01fd7d9c-8856-11e8-9ad8-8f06351e93be.png)

## Contributing

### With code

#### Setup your environment

Fork this project and clone it on your station. Set everything up with:

``` shell
npm install
```

#### Test it!

Jasmine is the tool of choice. Spin up the tests using the command `npm test`. You can find the test code at `spec`, along with the Jasmine configuration file.

For adding new tests, just create a new file on `spec` directory, with a name obeying the pattern `"**/*[sS]pec.js"` and you're good to go!

#### Build it!

The build process is handled by Webpack, accessible through npm. Use the following commands for a development or production build, respectively.

``` shell
npm run build-dev
npm run build
```

And that's it! The built files will be placed at `{project-root}/dist`.

### With sugestions or reporting problems

Go to [issues](https://github.com/Miguel-Fontes/trello-toolkit/issues) and get in touch!