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
        //action icons
        new SVGSpritemapPlugin('src/action/*.svg',
            {
                // styles: 'dist/sprites_action.scss',
                output: {
                    filename: 'sprites_action.svg',
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
        //dealerships icons
        new SVGSpritemapPlugin('src/dealerships/*.svg',
            {
                // styles: 'dist/sprites_dealerships.scss',
                output: {
                    filename: 'sprites_dealerships.svg',
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
        //editing icons
        new SVGSpritemapPlugin('src/editing/*.svg',
            {
                // styles: 'dist/sprites_editing.scss',
                output: {
                    filename: 'sprites_editing.svg',
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
        //icarsuite icons
        new SVGSpritemapPlugin('src/icarsuite/*.svg',
            {
                // styles: 'dist/sprites_icarsuite.scss',
                output: {
                    filename: 'sprites_icarsuite.svg',
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
        //listing icons
        new SVGSpritemapPlugin('src/listing/*.svg',
            {
                // styles: 'dist/sprites_listing.scss',
                output: {
                    filename: 'sprites_listing.svg',
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
        //media icons
        new SVGSpritemapPlugin('src/media/*.svg',
            {
                // styles: 'dist/sprites_media.scss',
                output: {
                    filename: 'sprites_media.svg',
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
        //navigation icons
        new SVGSpritemapPlugin('src/navigation/*.svg',
            {
                // styles: 'dist/sprites_navigation.scss',
                output: {
                    filename: 'sprites_navigation.svg',
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
        //object icons
        new SVGSpritemapPlugin('src/object/*.svg',
            {
                // styles: 'dist/sprites_object.scss',
                output: {
                    filename: 'sprites_object.svg',
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
        //products icons
        new SVGSpritemapPlugin('src/products/*.svg',
            {
                // styles: 'dist/sprites_products.scss',
                output: {
                    filename: 'sprites_products.svg',
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
        //response icons
        new SVGSpritemapPlugin('src/response/*.svg',
            {
                // styles: 'dist/sprites_response.scss',
                output: {
                    filename: 'sprites_response.svg',
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
        //social icons
        new SVGSpritemapPlugin('src/social/*.svg',
            {
                // styles: 'dist/sprites_social.scss',
                output: {
                    filename: 'sprites_social.svg',
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
