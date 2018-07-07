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

![Card Counter](https://user-images.githubusercontent.com/15656072/42411561-5a2e6158-81d4-11e8-97c9-95b5afb84459.png)

## Contributing

### Developers

Fork this project and clone it on your station. Set everything up with:

``` shell
npm install
```

The build process is handled by Webpack, accessible through npm:

``` shell
npm run build
```

And that's it! The built files will be placed at `{project-root}/dist`.

### Sugestions or Problems

Go to [issues](https://github.com/Miguel-Fontes/trello-toolkit/issues) and get in touch!