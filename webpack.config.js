var path = require('path');

module.exports = {
    entry: './src/multi-choice.js',
    output: {
        path: './bin',
        filename: 'multi-choice.bundle.js',
        libraryTarget: 'amd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname, "node_modules")],
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'less-loader', options: { strictMath: true, noIeCompat: true } }
                ]
            }
        ]
    },
    externals: {
        'react': 'react/v15',
        'react-dom': 'react-dom/v15',
    },
};
