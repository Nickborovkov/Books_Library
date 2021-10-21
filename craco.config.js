const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#13c2c2',
                            '@background-color-light': '#eeeeee',
                            '@border-radius-base': '3px',

                            '@layout-header-background': '#333333',
                            '@layout-header-color': '#ffffff',

                            '@shadow-color': 'rgba(0,0,0,0.29)',
                            '@btn-disable-color': '#ffffff',
                            '@btn-disable-bg': '#333333',
                            '@layout-body-background': '#333333',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
