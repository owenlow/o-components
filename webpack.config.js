const path = require('path');

const LIBRARY_NAME = 'o-components';

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: `${LIBRARY_NAME}.js`,
        library: {
            name: LIBRARY_NAME,
            type: "umd"
        },
    },
    externals: {
        react: 'react'
    }
};