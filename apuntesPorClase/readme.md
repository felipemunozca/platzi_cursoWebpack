# Curso de Webpack

## Índice
* [Clase 01 - Curso Avanzado de Webpack para Producción Web](#id1)
* [Clase 02 - Conceptos básicos de Webpack](#id2)
* [Clase 03 - Tu primer build con Webpack](#id3)
* [Clase 04 - Optimización de Proyectos Web con Webpack para Producción](#id4)
* [Clase 05 - Configuración básica de Webpack para proyectos JavaScript](#id5)
* [Clase 06 - Integración de Babel y Webpack para compatibilidad JavaScript](#id6)
* [Clase 07 - Configuración de HTML-webpack-plugin en Webpack](#id7)
* [Clase 08 - Configuración de Webpack para CSS y Preprocesadores](#id8)
* [Clase 09 - Uso de Copy Webpack Plugin para Mover Archivos en Proyectos Node.js](#id9)
* [Clase 10 - Importación de Imágenes con Webpack Asset Module](#id10)
* [Clase 11 - Optimización de Fuentes Locales con Webpack](#id11)

---

## Curso Avanzado de Webpack para Producción Web [1/28]<a name="id1"></a>
Webpack es una herramienta poderosa que prepara tu código para producción, optimizándolo y gestionando los recursos para que tu sitio web funcione de manera eficiente.
Webpack permite manejar no solo JavaScript, sino también archivos CSS, imágenes y fuentes, haciendo que el proyecto sea más manejable y profesional.
Además, Webpack es una herramienta adoptada por gigantes como Twitter, Instagram y PayPal, lo que realza su importancia en la industria.

### ¿Cómo surgió y qué impacto ha tenido Webpack?
Webpack fue creado en 2012 y desde entonces se ha convertido en un pilar para el desarrollo web. Su capacidad para optimizar recursos y ejecutar tareas lo ha hecho popular entre grandes empresas y desarrolladores. Además, habilita un entorno de desarrollo local para pruebas y carga de módulos con diferentes formatos como AMD, CommonJS o ES2015. Esto permite a los desarrolladores trabajar de forma modular, dividiendo el código en diferentes partes y luego uniéndolo eficientemente.

### ¿Qué beneficios ofrece el uso de Webpack en proyectos web?
* **Optimización del código**: facilita la minificación del código y el uso de plugins para mejorar el rendimiento.
* **Manejo de dependencias**: Simplifica la gestión de las distintas dependencias de un proyecto, asegurando que todas las piezas encajen correctamente.
* **Modularidad y escalabilidad**: Permite dividir el código en módulos, mejorando la organización y escalabilidad del mismo.
* **Compatibilidad extensiva**: Es compatible con cualquier framework o librería, lo que te permite integrarlo fácilmente en tu flujo de trabajo actual.

---

## Conceptos básicos de Webpack [2/28]<a name="id2"></a>
Webpack es una herramienta fundamental para las aplicaciones modernas de JavaScript. Actúa como un empaquetador de módulos estáticos que construye un gráfico de dependencias.
Este gráfico mapea cada módulo de la aplicación y lo transforma según sea necesario. Aquí radica la esencia de Webpack: convierte múltiples archivos JavaScript en uno o más archivos finales que pueden ser gestionados más eficientemente.

### ¿Qué novedades trae Webpack desde su versión 4?
Con la llegada de Webpack 4, se introdujeron cambios importantes que mejoraron su facilidad de uso. Uno de los más destacados es que ya no se requiere un archivo de configuración por defecto. Webpack ahora puede funcionar con un estándar preestablecido, simplificando el proceso de configuración de proyectos. Sin embargo, es esencial entender dos conceptos clave:

1. **Punto de entrada (Entry Point)**: Es el archivo principal que servirá como inicio de la aplicación. Este archivo, llamado generalmente ```index.js```, debe estar ubicado en una carpeta específica.

2. **Punto de salida (Output)**: El resultado del proceso de compilación de Webpack se ubicará en una carpeta llamada ```dist``` (nombre corto de ```distribution```). Aquí se almacenarán todos los archivos listos para producción, incluyendo imágenes, JavaScript y HTML.

### ¿Cómo facilita Webpack el desarrollo de aplicaciones?
Webpack ofrece varios modos y herramientas útiles, entre ellos:

* Modos de desarrollo y producción: Permiten optimizar el proyecto según el entorno. Por ejemplo, en modo desarrollo, es más fácil identificar errores y realizar seguimiento de cambios, mientras que el modo producción está más optimizado para rendimiento.

* Observación en tiempo real: Configurar Webpack para observar los cambios en tiempo real facilita la detección de errores y permite una recompilación automática, mejorando el flujo de trabajo del desarrollador.

### ¿Qué son los loaders y plugins en Webpack?

* **Loaders**: Ayudan a interpretar y transformar archivos antes de que sean procesados por Webpack. Por ejemplo, al trabajar con React y su sintaxis JSX, se necesita un loader que entienda y convierta ese código a JavaScript normal.

* **Plugins**: Amplían las funcionalidades de los loaders y añaden configuraciones específicas. Estos son ideales para tareas como minificar código, gestionar ambientes de ejecución o definir puntos de salida alternativos.

### ¿Cómo mejorar el rendimiento y la experiencia de desarrollo con Webpack?
Las opciones avanzadas de configuración en Webpack permiten:

* **Minificación y optimización**: Para reducir el tamaño de los archivos finales y mejorar la carga de la aplicación.

* **Entornos de desarrollo locales**: Crear un servidor local que permite ver los cambios en tiempo real en el navegador. Esta funcionalidad es crítica para un flujo de desarrollo ágil.

---

## Tu primer build con Webpack [3/28]<a name="id3"></a>

### ¿Cómo iniciar un nuevo proyecto?
1. Crear y organizar la carpeta del proyecto:
    * Utilizar el comando ```mkdir``` para crear una nueva carpeta, por ejemplo, ```Curso Webpack```.
    * Navega dentro de esta carpeta para iniciar la configuración.

2. Inicializar Git y NPM:
    * Ejecutar ```git init``` para crear un repositorio local. Esto es esencial para manejar el control de versiones.
    * Usar ```npm init -y``` para generar el archivo ```package.json``` de manera rápida y automática. Este archivo es crucial para gestionar las dependencias del proyecto.

3. Configurar el espacio de trabajo:
    * Abrir la carpeta en un editor de código, como Visual Studio Code.
    * Crea una estructura de carpetas, se sugiere usar una carpeta ```src``` para almacenar el código fuente.

### Implementar un código básico en JavaScript
En la carpeta ```src```, crear un archivo ```index.js``` donde se colocara la lógica inicial. Por ejemplo:
```javascript
const hello = "hello world";
console.log(hello);
```
Este código es un punto de partida para ver cómo Webpack optimiza tu estructura.

### ¿Cómo instalar y usar Webpack?

1. Instalación de Webpack:
	* Utiliza el siguiente comando en la terminal para instalar Webpack y su CLI:
```
npm install webpack webpack-cli -D
```
Esto debe ser instalado como **dependencia de desarrollo**.

2. Ejecución de Webpack:
    * Una vez instalado, escribir el siguiente comando para ejecutar de manera local:
```
npx webpack
```
Este comando generará una carpeta ```dist``` con un archivo ```main.js``` optimizado.

### ¿Qué diferencias hay entre los modos development y production?
1. **Modo Development**: proporciona una versión del código optimizada para depuración, incluyendo mapas de origen que facilitan el debugging. Se ejecuta con el comando:
```
npx webpack --mode development
```

2. **Modo Production**: minifica y optimiza el código para ser lo más eficiente posible, eliminando redundancias innecesarias. Se ejecuta con el comando:
```
npx webpack --mode production
```

### ¿Cómo estructurar un proyecto con múltiples archivos?

1. Crear archivos de utilidad: Dentro de ```src```, crear una carpeta ```utils``` y agregar un archivo ```sum.js``` con el siguiente contenido:
```javascript
const sum = (a, b) => a + b;
export default sum;
```

2. Importar y usar módulos en ```index.js```: Importa la función sum en el archivo principal:
```javascript
import sum from './utils/sum';

console.log(sum(2, 2));
```

Al ejecutar Webpack, tanto en development como en production, se puede notar que el código resultante es optimizado de diferentes formas dependiendo del modo.

---

## Optimización de Proyectos Web con Webpack para Producción [4/28]<a name="id4"></a>
La optimización de un proyecto web es fundamental para garantizar que se ejecute de manera eficiente en producción. Para aprender cómo transformar un proyecto básico de HTML, CSS y JavaScript en uno listo para producción utilizando Webpack, aquí tienes una guía paso a paso.

### ¿Qué proyecto vamos a crear?
Para entender el poder de Webpack, se trabajara con un proyecto de portafolio simple, el cual mostrará:
+ Foto de perfil.
+ Nombre y correo electrónico.
+ Ubicación y redes sociales.

Cada vez que se refresque la página, se generará un nuevo usuario gracias a una API aleatoria, añadiendo lógica al proyecto.

### ¿Cómo clonar el proyecto?
El primer paso es obtener el repositorio del proyecto. Utilizar la terminal de tu entorno de desarrollo preferido para clonar el proyecto, escribiendo el comando:
```
git clone [URL_del_repositorio]
```

### ¿Qué organizar para iniciar con Webpack?
Un aspecto fundamental al trabajar con Webpack es la organización de archivos. La estructura básica debería incluir:
+ Carpeta public: Contiene archivos estáticos esenciales.
+ Carpeta source: Aquí reside el código fuente del proyecto.
+ Archivos clave como .gitignore, el package.json y la licencia.

Dentro de la carpeta source, se encuentra:
+ HTML, CSS y JavaScript Vanilla: Sin frameworks ni librerías.
+ Fonts y recursos estáticos: Incluyendo imágenes de redes sociales.
+ Sistema de templates y lógica de API: Utilizado para la generación dinámica del contenido utilizando Random User API.

### ¿Cómo integrar y configurar Webpack en el proyecto?
El siguiente paso después de entender la estructura es integrar Webpack. Se procede con la instalación en el terminal:
```
npm install webpack webpack-cli -D
```
Esto añade Webpack y sus componentes de línea de comandos como dependencias de desarrollo.
Para asegurar que las configuraciones de Webpack funcionen sin problemas, ejecuta el siguiente comando para ver cómo se comporta en modo producción:
```
npx webpack --mode production
```
En este estado, Webpack usará sus configuraciones predeterminadas para minificar y preparar el proyecto para producción.

### ¿Por qué crear un archivo de configuración personalizado?
El archivo de configuración de Webpack es crucial porque define cómo se manejan las entradas y salidas del proyecto, así como otras configuraciones esenciales.

---

## Configuración básica de Webpack para proyectos JavaScript [5/28]<a name="id5"></a>
En esta clase exploraremos la configuración básica de webpack, una herramienta esencial para crear aplicaciones web eficientes y modulares.

### ¿Cómo crear el archivo de configuración de webpack?
Se comienza creando un nuevo archivo de configuración. En la raíz del proyecto, crear un nuevo archivo y debe llamarse **webpack.config.js**. 
Este archivo se convertirá en el recurso principal para definir la configuración que el proyecto necesita.
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js']
  }
};
```
### ¿Qué elementos se deben configurar inicialmente?
+ **Entrada (entry)**: Se refiere al punto de inicio de la aplicación. Generalmente, es el archivo index.js en el directorio *src* (por eso se utilizan estos nombres y rutas, para crear un estándar).

+ **Salida (output)**: Determina el destino o ruta de la compilación final. Webpack genera los archivos en una carpeta llamada **dist**, abreviatura de **distribution**. Se Puede dar nombres específicos a los archivos compilados, como main.js o bundle.js.

+ **Resolución (resolve)**: Aquí se definen las extensiones de archivos que webpack debe manejar. Comúnmente, se incluyen extensiones como .js, y si se utilizan frameworks como Svelte o React, configuraciones adicionales podrían ser necesarias.

### ¿Cómo ejecutar webpack con la configuración establecida?
Una vez configurado, se verifica que no existan errores de escritura (typos) en el archivo webpack.config.js y ejecuta el siguiente comando en la terminal para compilar el proyecto:

`npx webpack --mode production --config webpack.config.js`

Como alternativa, se puede simplificar la ejecución creando un script dentro del archivo package.json:
```
"scripts": {
  "build": "webpack --mode production"
}
```

Así, se podrá ejecutar webpack con el comando **npm run build**, omitiendo la necesidad de especificar el archivo de configuración siempre que esté en la raíz del proyecto.

---

## Integración de Babel y Webpack para compatibilidad JavaScript [6/28]<a name="id6"></a>
Mejorar la compatibilidad de tu código JavaScript con todos los navegadores puede ser una tarea compleja. Sin embargo, Babel es una herramienta que puede simplificar este proceso. 
Babel se utiliza para transformar el código JavaScript en una versión más compatible con los entornos actuales, asegurando que funcione correctamente en **cualquier navegador**.

### ¿Cuáles son las dependencias necesarias para Babel?
Para comenzar a utilizar Babel, es esencial instalar ciertas dependencias que prepararán el código JavaScript. Aquí hay una lista de comandos para instalar estas dependencias a través de npm:

#### Instalar dependencias de Babel
Escribir en la consola el siguiente comando:

`npm install @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader -D`

**IMPORTANTE:** hacer la instalación como dependencia de desarrollo.

+ **@babel/core**: El núcleo de Babel.
+ **@babel/preset-env**: Ayuda a trabajar con JavaScript moderno.
+ **@babel/plugin-transform-runtime**: Facilita el manejo de asincronismos.
+ **babel-loader**: Permite a Webpack procesar archivos JavaScript a través de Babel.

### ¿Cómo configurar Babel en el proyecto?
Una vez instaladas las dependencias, se debe crear un archivo de configuración para Babel, comúnmente conocido como **.babelrc**. Este archivo desde estar en la raíz del proyecto y describe cómo Babel debe transformar el código JavaScript.
````javascript
// Archivo .babelrc
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-runtime"]
}
````

En este archivo, se especifican los *presets* y *plugins* mencionados previamente. 
El uso de un punto al inicio del nombre del archivo lo hace oculto en sistemas operativos Unix, así que podría no ser visible a simple vista.

### ¿Cómo integrar Babel con Webpack?
Ahora que Babel está preparado, debemos asegurarnos de que Webpack pueda utilizarlo para procesar el código en JavaScript. Se necesita modificar la configuración de Webpack para que incluya el nuevo módulo Babel.
````javascript
// Configuración de webpack.config.js
module.exports = {
  // ... otras configuraciones
  module: {
    rules: [
      {
        test: /\.m?js$/, // Archivos .mjs o .js
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
````

+ **test**: Define que Webpack debe utilizar Babel para archivos con extensiones .js o .mjs.
+ **exclude**: Evita que los módulos dentro de la carpeta node_modules sean procesados por Babel.
+ **use**: Especifica que babel-loader se utilizará para el proceso de transformación.

### ¿Cómo verificar que la configuración funciona?
Tras configurar Babel y Webpack, es crucial verificar que todo funcione correctamente. Para realizar la prueba, se compilando el proyecto con el siguiente comando:

`npm run build`

Esto ejecuta el proceso de build en modo producción. Verificar el archivo de salida compilado para confirmar que el código JavaScript ha sido transformado correctamente, asegurando la compatibilidad con cualquier navegador.

### ¿Por qué es importante esta configuración?
La configuración adecuada de Babel y Webpack permite que el JavaScript moderno, que quizás no sea compatible directamente con ciertos navegadores, sea transformado a un formato que sí lo es. Esto logra que tu aplicación funcione sin problemas en una amplia variedad de dispositivos y versiones de navegadores, garantizando una experiencia de usuario más consistente.

> [!IMPORTANT]
> Si se esta tomando el curso después de Julio de 2025 probablemente aparezca un error al compilar indicando que no puede encontrar unos Módulos. Para resolverlo, se necesita agregar la dependencia **"npm install @babel/runtime"**, y muy IMPORTANTE, no se debe agregar como dependencia de desarrollo, sino que tiene que ser en producción.

--- 

## Configuración de HTML-webpack-plugin en Webpack [7/28]<a name="id7"></a>
Para crear proyectos eficientes y bien optimizados, es esencial aprender a integrar HTML con Webpack. Este proceso permite preparar y gestionar adecuadamente nuestros los HTML para producción.

### Instalación del plugin:
1. Instalar HTML-webpack-plugin: Este plugin es fundamental para la configuración de Webpack, ya que mejora el manejo de archivos HTML del proyecto.
````
npm install html-webpack-plugin --save-dev
````

2. Configuración en el archivo webpack.config.js: modificar este archivo para incluir el plugin que se acaba de instalar.

````javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // otras configuraciones
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
````

### Cambios en el archivo index.html:

Eliminar referencias directas a scripts que serán gestionados por Webpack:
````html
<!-- Antes -->
<script src="main.js"></script>

<!-- Después -->
<!-- Nada, Webpack se encargará de esto -->
````

### ¿Cómo se compila y prueba el proyecto?
Con la configuración completa, ahora compilar y probar el proyecto es sencillo. Podemos hacerlo tanto para entornos de desarrollo como de producción usando diferentes comandos de npm.

#### Compilar para producción:
Este comando genera la versión optimizada para producción, incluyendo la minificación de archivos.
````
npm run build
````

#### Compilar para desarrollo:
Este comando nos ayuda a obtener una versión más legible del código, ideal para depuración.
````
npm run dev
````

### ¿Qué observar después de la compilación?
Una vez realizados los pasos anteriores y ejecutados los comandos, se debe revisar:
* El archivo index.html está incluido con scripts automáticamente inyectados.
* La versión de producción está minificada.
* La versión de desarrollo mantiene un formato más legible para facilitar la depuración.

---

## Configuración de Webpack para CSS y Preprocesadores [8/28]<a name="id8"></a>
El uso adecuado de CSS y preprocesadores en proyectos web es fundamental para un desarrollo eficiente y estilizado.

### Instalar las dependencias necesarias
Se deben instalar algunas dependencias esenciales, CSSLoader y MiniCssExtractPlugin:

1. Abrir la terminal y ejecutar el siguiente comando para instalar como dependencias de desarrollo:
````
npm install mini-css-extract-plugin css-loader -D
````

2. Estas dependencias permitirán procesar y combinar CSS para toda la aplicación.

### ¿Cómo modificar la estructura del proyecto?
Después de instalar las dependencias, se deben seguir los siguientes pasos:

* Eliminar la referencia CSS de la plantilla HTML.
* Abrir el archivo index.js en la carpeta source.
* Importar los estilos directamente desde tu archivo main.css con:
````javascript
import './styles/main.css';
````

### ¿Cómo configurar Webpack para procesos CSS?
Se debe modificar el archivo de configuración de Webpack de la siguiente manera:

1. Se debe requerir el plugin dentro del archivo de configuración:
````javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
````

2. Configurar una nueva regla para CSS en la sección de module.rules:
````javascript
module: {
    rules: [
        // Otras reglas...
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
    ],
}
````

3. Añadir el plugin a la sección de plugins:
````javascript
plugins: [
    new MiniCssExtractPlugin(),
    // Otros plugins...
],
````

### ¿Cómo probar la configuración?
Una vez que las configuraciones funcionan adecuadamente. Se ejecuta el proyecto en modo de desarrollo con el comando:
````
npm run dev
````
Esto debería compilar los archivos CSS, generando archivos como main.js y main.css, ubicados en tu carpeta **dist**.

---

## Uso de Copy Webpack Plugin para Mover Archivos en Proyectos Node.js [9/28]<a name="id9"></a>
Trabajar con proyectos a menudo exige mover archivos de una ubicación a otra dentro de la estructura del proyecto.
El plugin Copy Webpack Plugin en Webpack resuelve esta necesidad al facilitar la copia de archivos de un directorio de origen a uno de destino automáticamente.

### ¿Cómo instalar y configurar el plugin?
Iniciar la instalación del plugin es sencillo:

1. Instalación del plugin: Abrir la terminal y ejecutar el comando para instalarlo como una dependencia de desarrollo:
````
npm install copy-webpack-plugin --save-dev
````

2. Integración en Webpack: Agregar soporte para el plugin en la configuración de Webpack. Para esto, modifica el archivo webpack.config.js:
````javascript
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  // otras configuraciones de webpack
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'dist/assets/images' },
      ],
    }),
  ],
};
````

Esta configuración permite copiar todos los archivos desde la carpeta *src/assets/images* a *dist/assets/images*. Esto es especialmente útil cuando se necesita trasladar múltiples archivos sin esfuerzo manual.

### ¿Cómo ajustar el template del proyecto?
Dentro del template HTML se debe cambiar las rutas de las imágenes para que apunten al nuevo directorio de destino:
````html
<img src="/assets/images/twitter.png" alt="Twitter">
<img src="/assets/images/github.png" alt="GitHub">
<img src="/assets/images/instagram.png" alt="Instagram">
````

Se debe Modificar cualquier instancia previa que apunte al directorio *src*. Con esto, el proyecto queda estructurado de forma más adecuada, leyendo las imágenes desde su nueva ubicación.

### ¿Qué verificar después de la implementación?
Después de ejecutar el comando de desarrollo para ver los cambios, es crucial verificar que los elementos se han movido correctamente:

1. Ejecutar el comando **npm run dev** para construir nuevamente tu proyecto.
2. Revisar el directorio **dist** para confirmar que las imágenes se hayan copiado adecuadamente.
3. Levantar el proyecto con live server y usar inspectores de elementos en el navegador para asegurarse de que las rutas de las imágenes en el HTML dirijan al directorio correcto.

#### Recomendaciones y consejos adicionales
* El Copy Webpack Plugin es invaluable no solo para transferir imágenes, sino también otros recursos como fuentes o archivos específicos que no necesitas compilar.
* Asegurarse de mantener un estándar en el proyecto utilizando siempre las mismas comillas para evitar errores de formato.
* Practicar la actualización de rutas y configuración de archivos en proyectos de desarrollo reales para familiarizarse mejor con el proceso.

---

## Importación de Imágenes con Webpack Asset Module [10/28]<a name="id10"></a>
Importar imágenes correctamente en un proyecto es crucial para una óptima gestión de recursos.

### ¿Qué es el asset module de Webpack?
Webpack ofrece la funcionalidad de **asset module**, una forma eficiente de manejar archivos estáticos sin necesidad de loaders adicionales. Al integrarse directamente en la configuración de Webpack, asset module permite importar imágenes como recursos y optimizarlas automáticamente.

### Implementación de asset module
Para comenzar, es necesario establecer unas reglas en el archivo de configuración de Webpack:
````javascript
module.exports = {
  module: {
    rules: [
      // Regla para manejo de CSS ya existente
      {
        test: /\.png$/,
        type: 'asset/resource'
      }
    ]
  }
}
````

Esta regla indica a Webpack que trate los archivos .png como recursos, permitiendo su importación directa en el código JavaScript.

### ¿Cómo importar imágenes en el proyecto?
Con la configuración de Webpack lista, el siguiente paso es importar las imágenes como variables:
````javascript
import github from './assets/images/github.png';
import twitter from './assets/images/twitter.png';
import instagram from './assets/images/instagram.png';
````

Al hacer esto, cada imagen se transforma en una variable que puede emplearse en plantillas o componentes, sustituyendo vínculos directos a ficheros.

### ¿Cómo modificar plantillas para usar variables de imágenes?
Modificar plantillas para aprovechar las variables de imágenes es sencillo. Se sustituye la ruta directa por la referencia a la variable:
````javascript
<img src="${twitter}" alt="Twitter">
<img src="${github}" alt="GitHub">
<img src="${instagram}" alt="Instagram">
````

Con estas modificaciones, el código se vuelve más legible y se facilita el mantenimiento. Las imágenes se cargan y optimizan automáticamente, ofreciendo mejoras significativas en rendimiento.

### ¿Qué ventajas ofrece este método?
* Optimización automática: Las imágenes se optimizan al generar un hash único, mejorando su uso en producción.
* Facilidad de mantenimiento: El código es más limpio y entendible al usar variables, lo cual ayuda en la gestión de grandes proyectos.
* Integración sencilla: Con apenas unas líneas en la configuración, es posible habilitar esta funcionalidad para diferentes tipos de archivos.

---

## Optimización de Fuentes Locales con Webpack [11/28]<a name="id11"></a>
Trabajar con fuentes externas, como las de Google Fonts, es común que los proyectos se vuelvan más pesados por los llamados que se realizan a estas fuentes. Una excelente práctica de optimización consiste en integrar estas fuentes de manera local dentro del proyecto. Esto garantiza un rendimiento mejorado y una carga más rápida.

### ¿Cómo identificar y descargar la fuente?
En muchos proyectos, las fuentes se gestionan desde la hoja de estilos principal. Por ejemplo, si estás importando la fuente "Ubuntu" de Google Fonts en el archivo CSS, es momento de descargarla para incorporarla localmente. Si bien Google Fonts permite la descarga de fuentes, es necesario obtenerlas en formato optimizado para la web, como **.woff** o **.woff2**.

### ¿Cómo integrar las fuentes localmente con font-face?
Una vez descargada la fuente, es momento de integrarla al proyecto. Se crea una carpeta *fonts* dentro del directorio *assets* y ahí se colocan las fuentes descargadas. Luego, en el archivo CSS, se utiliza la regla **@font-face** para definir la fuente localmente.
````css
@font-face {
    font-family: 'Ubuntu';
    src: url('../assets/fonts/ubuntu-regular.woff2') format('woff2'),
         url('../assets/fonts/ubuntu-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
````

Con esta configuración, se le indica al navegador que utilice las fuentes locales en lugar de recurrir a servidores externos. Esto no solo mejora la velocidad de carga, sino también la consistencia del proyecto.

### ¿Cómo configurar webpack para copiar fuentes?
Una vez que las fuentes están integradas localmente, el siguiente paso es asegurarse de que se incluyan correctamente en la carpeta de *dist* al momento de compilar el proyecto con webpack.

1. Primero, instalar los loaders (plugins) necesarios:
````
npm install url-loader file-loader --save-dev
````

2. Luego, añadir la siguiente configuración a el archivo webpack:
````javascript
module.exports = {
  module: {
    rules: [
      // Otras reglas
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[name].[ext]',
            outputPath: 'assets/fonts/',
            publicPath: 'assets/fonts/',
            esModule: false
          }
        }
      }
    ]
  }
};
````

Con estas reglas, se le indica a webpack cómo manejar y procesar los archivos de fuentes, asegurando que se copien a la ubicación correcta en la carpeta de distribución.

### ¿Cómo verificar la integración exitosa?
Verificar que las fuentes se carguen localmente inspeccionando el elemento desde el navegador y asegurando que el font-family aplicado corresponda al que se ha definido. También es recomendable verificar visualmente que la representación de las fuentes sea la esperada por sus características distintivas, como las formas de las letras.

---