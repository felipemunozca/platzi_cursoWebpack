const path = require('path');
/**
 * N_7.1: Se agrega el plugin de html-webpack-plugin.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            }
        ]
    },
    /**
     * N_7.2: Se agrega una nueva sección para agregar los plugins.
     * Se agregan como un arreglo, ya que puede ser uno o varios.
     * Se instancia el plugin de webpack html con la palabra new, e internamente, se le pasa un objeto. Dentro, se le pasaran las 
     *      configuraciones que tendrá este plugin:
     *      inject -> hará la inserción de los elementos, debe ser true, para que se ejecute.
     *      template -> la ruta de la plantilla que se utilizara
     *      filename -> nombre del archivo que se obtendrá como resultado.
     */
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        })
    ]
}
