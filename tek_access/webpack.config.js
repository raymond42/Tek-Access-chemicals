module.exports = {
    entry: ['babel-polyfill', './test.js'],

    output: {
        filename: 'main.js',
        publicPath: "/static/frontend/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif|ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    }
}