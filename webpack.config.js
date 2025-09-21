const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/**
 * N_9.1: Se instala un nuevo plugin llamado copy-webpack-plugin como dependencia de desarrollo para copiar uno o mas archivos a 
 *      una nueva ruta.
 * Se inicializa el nuevo plugin como una constante.
 */
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
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
        /**
         * N_9.2: Se crea una nueva instancia del plugin.
         * Se le pasa una configuración partiendo por un modelo o patters, el cual sera un arreglo, que dentro tendrá un objeto.
         * El objeto tendrá dos elementos, desde donde y hacia donde se moverán los archivos.
         *      from -> resolverá la ruta buscando en el directorio la carpeta src y luego assets/images.
         *      to -> la ruta donde se van a mover los archivos. No es obligatorio que la ruta se llame igual, se pueden utilizar 
         *            otros nombres.
         * 
         * N_9.3: El siguiente paso sera editar la plantilla en la ruta src/templates/Templates.js.
         * Como ahora las imágenes se agregaran en una nueva ruta en la carpeta dist, se debe editar el template y quitar 
         *      src="../src/" de la ruta de la imagen.
         * 
         * N_9.4: Una vez hecha la configuración, ejecutar el comando:
         * npm run dev
         * Ahora dentro de la carpeta "dist", aparecerá la carpeta "assets" y dentro "images" con las 3 imágenes de iconos que se 
         *      le pasaron
         */
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
