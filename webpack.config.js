const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * N_8.3: Se crea una constante para agregar el plugin instalado mini-css-extract-plugin. 
 * Este plugin permitirá añadir la configuración para que identifique los elementos.
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        /**
         * N_8.4: Se creara una nueva regla para reconocer los archivos CSS.
         */
        rules: [
            {
                test: /\.m?js$/, // Expresión regular para Archivos .mjs o .js
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                }
            },
            /**
             * N_8.5: Se agrega test seguido de la expresion regular para reconocer archivos con extension css.
             * Se agrega use (puede ser utilizado como un objeto o un arreglo), y dentro del arreglo, se instancia el plugin seguido 
             *      de la función loader, y luego una coma "," para pasarle los louder a utilizar: 
             *      En este caso sera el css-loader
             * 
             * N_8.8: Se instala el plugin stylus como dependencia de desarrollo, y se puede agregar dentro de la misma regla de 
             *      archivos .css ya creada.
             * Los archivos del pre procesador stylus tienen la extension .styl y se pueden agregar en la misma regla. Luego solo es 
             *      necesario agregar el loader correspondiente.
             * Se agrega un separador "O" "|" y ambos extensiones de archivo.
             * IMPORTANTE: NO agregar espacios en blanco, ya que se producen errores al compilar con webpack.
             * 
             * N_8.9: Dentro de la carpeta src/styles se crea un nuevo archivo vars.styl 
             * Se crea una variable y se le asigna un color de prueba, luego se asigna al body.
             */
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
        /**
         * N_8.6: Dentro del plugins, se crea una nueva instancia del plugin mini-css.
         * No es necesario pasarle ningún valor, solo se necesitar iniciar.
         * 
         * N_8.7: Con la configuración lista, se ejecuta el comando:
         *      npm run dev
         * Dentro de la carpeta "dist" se creara un nuevo archivo llamado main.css 
         */
        new MiniCssExtractPlugin(),
    ]
}
