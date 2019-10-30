const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
    // mode: 'development',
    // output: {
    //     filename: 'main.js',
    //     path: path.resolve(__dirname, 'dist'),
    // },
    plugins: [
        new WebpackBuildNotifierPlugin({
            title: "[WEBPACK]: Nitro UI SVG Generates"
        }),
        // plugin to generate svg code for using svg <use> on template
        new SVGSpritemapPlugin('src/**/*.svg',
            {
                styles: 'dist/sprites.scss',
                output: {
                    filename: 'sprites.svg',
                    svgo: false
                },
                sprite: {
                    prefix: 'icon--',
                    generate: {
                        title: false
                    }
                },
            }
        ),
    ]
};
