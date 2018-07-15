const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'trello-toolkit.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "src/manifest.json" },
            { from: "assets/css/style.css" }
        ]),
        new CleanWebpackPlugin(["dist"])
    ]
};