# Curso de Webpack

## Índice
* [Clase 01 - Curso Avanzado de Webpack para Producción Web](#id1)
* [Clase 02 - Conceptos básicos de Webpack](#id2)
* [Clase 03 - Tu primer build con Webpack](#id3)

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