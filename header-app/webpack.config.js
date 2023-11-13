const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
    entry: "./src/entry.js",
    mode: "development",
    devServer: {
        port: 3001,
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            use: [
                {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
                },
            ],
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
        }),
        new ModuleFederationPlugin({
            name: "PanelApp",
            filename: "remoteEntry.js",
            exposes: {
              "./Panel": "./src/App",
            },
            shared: {
              ...dependencies,
              react: {
                singleton: true,
                requiredVersion: dependencies["react"],
              },
              "react-dom": {
                singleton: true,
                requiredVersion: dependencies["react-dom"],
              },
            },
          }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    target: "web",
};