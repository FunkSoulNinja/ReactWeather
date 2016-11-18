module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.js',
            Nav: 'app/components/Nav.js'
        },
        extentions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015"]
                },
                test: /\.js?$/,
                exclude: /(node_modules | bower_components)/
            }
        ]
    },
    devtool: 'inline-source-map'
};
