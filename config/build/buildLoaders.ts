import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const cssLoaders = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }

    // Если бы мы работали на с js ф не ts - нужно было бы подключать babel
    const typeScriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
    return [
        typeScriptLoader,
        cssLoaders,
    ]
}
