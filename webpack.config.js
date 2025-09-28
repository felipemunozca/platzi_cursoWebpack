const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        /**
         * N_11.3: Se agrega una configuración extra que falto en la clase anterior, para mover las imágenes a una ruta establecida.
         */
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/, // Expresión regular para Archivos .mjs o .js
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css|.styl$/i,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ],
            },
            {
                test: /\.png/,
                type: "asset/resource"
            },
            /**
             * N_11.2: Se crea una nueva regla para trabajar con las fuentes locales, que están enfocadas para web.
             * Se crea el test con la expresión regular para solo leer extensiones woff y woff2.
             * Se agrega el use para utilizar el loader que sera de tipo "url-loader".
             * Se le pasan unas opciones de configuración:
             * el limite se establece en 10000.
             * el mimetype establece el tamaño y el tipo de formato que tienen.
             * el nombre se fija con formato para que respete el nombre original y la extension original.
             * la ruta a donde se enviaran las fuentes.
             * la ruta publica donde estarán las fuentes.
             * finalmente, el valor booleano si se utilizara o no el esModule.
             * 
             * N_11.4: Se realiza la prueba del código, se ejecuta el comando npm run dev.
             * En la carpeta dist, ahora aparecerá una nueva carpeta fonts con las fuentes "regulares" de ubuntu (solo están estas 
             *      dos porque fueron las únicas definidas).
             * 
             * N_11.5: Como extra, se agregaron las imágenes dentro de la carpeta dist/images
             */
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "[name].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "./assets/fonts/",
                        esModule: false,
                    },
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        })
    ]
}
