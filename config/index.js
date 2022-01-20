'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

const os = require('os');
//自动获取本机局域网ip地址
function getNetworkIp() {
    let needHost = ''; // 打开的host
    try {
        // 获得网络接口列表
        let network = os.networkInterfaces();
        for (let dev in network) {
            let iface = network[dev];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    needHost = alias.address;
                }
            }
        }
    } catch (e) {
        needHost = 'localhost';
    }
    return needHost;
}


module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {

            '/api/v2': {
                secure: true, // 如果是 https ,需要开启这个选项

                target: 'https://geoapi.qweather.com/', //目标接口域名接口地址
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api/v2': '/' //重写接口 后台接口指向不统一  所以指向所有/
                        // 等价于    /api + /api  ==  https://geoapi.qweather.com/api
                        // 如果写为 '^/api' : '/'
                        // 等价于   /api + /  == https://geoapi.qweather.com/
                        // 这里的 /api ==  https://geoapi.qweather.com/
                }
            },
            '/api/place': {
                secure: true, // 如果是 https ,需要开启这个选项

                target: 'https://api.map.baidu.com/', //目标接口域名接口地址
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api/place': '/' //重写接口 后台接口指向不统一  所以指向所有/
                        // 等价于    /api + /api  ==  https://geoapi.qweather.com/api
                        // 如果写为 '^/api' : '/'
                        // 等价于   /api + /  == https://geoapi.qweather.com/
                        // 这里的 /api ==  https://geoapi.qweather.com/
                }
            },

            cssSourceMap: false
        },

        // localhost
        // Various Dev Server settings

        // 10.80.7.49

        host: getNetworkIp(), // can be overwritten by process.env.HOST

        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}