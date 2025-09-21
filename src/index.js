import Template from './templates/Template.js';
/**
 * N_8.2: Ahora se manejara la ruta de los estilos CSS desde el archivo index.js dentro de la carpeta src.
 * Se agrega la ruta al archivo CSS completa.
 * 
 * N_8.10: Se importa el nuevo archivo de tipo stylus.
 * Luego ejecutar el comando: npm run dev 
 * Y finalmente, para revisar si funciono, ir al archivo dist/main.css y en la parte final, debería aparecer la regla que se creo en 
 *      el archivo stylus.
 */
import './styles/main.css';
import './styles/vars.styl';

// console.log('hola');

(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template();
})();
