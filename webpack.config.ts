import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config: webpack.Configuration = {
    mode: "development",
    // стартовая точка приожния
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    // настройки куда и как будем делать сборку
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, 'public', 'index.html')
            }
        ),
        new webpack.ProgressPlugin(),
    ],
    module: {
        // лоудеры которые выходят за рамки js - обработка таких фацлов как (png, jpg, css и т.д)
        // это правило обрабатывает только ts,tsx
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;