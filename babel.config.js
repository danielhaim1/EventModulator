module.exports = {
    presets: [
        ['@babel/preset-env', {
            modules: 'commonjs'
        }]
    ]
    , ignore: ['node_modules']
    , include: ['./src/**/**.js']
    , plugins: [
        '@babel/plugin-proposal-object-rest-spread'
        , '@babel/plugin-proposal-class-properties'
    ]
    , sourceMaps: false
};
