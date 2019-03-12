const path = require('path')

module.exports = {
    webpackConfig: require('react-scripts-rewired/config/webpack.config.dev.extend'),
    components: [
        // 'src/components/**/*.jsx',
        'src/components/MobilePage/components/Title/Title.js',
        'src/components/MobilePage/components/Text/Text.js',
        'src/components/MobilePage/MobilePage.js',
        'src/features/channels-list/components/ChannelsList.jsx',
    ],
    context: {
        MobilePageStyleguidist: path.join(__dirname, 'src/components/MobilePage/lib/styleguidist.wrappers'),
    },
}
