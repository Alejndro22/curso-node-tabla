import { argv } from './config/yargs.js';
import { generarTabla } from './helpers/multiplicar.js';

console.clear();

generarTabla(argv.b, argv.l, argv.u)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.log(err));
