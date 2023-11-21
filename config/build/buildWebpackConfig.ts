import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options
    return {
        mode,
        // стартовая точка приожния
        entry: paths.entry,
        // настройки куда и как будем делать сборку
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            // лоудеры которые выходят за рамки js - обработка таких файлов как (png, jpg, css и т.д)
            // это правило обрабатывает только ts,tsx
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}
