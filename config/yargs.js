import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .option('u', {
    alias: 'until',
    type: 'number',
    default: 10,
    describe: 'Numero hasta el que se hara la tabla',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser un numero';
    }
    return true;
  }).argv;

export { argv };
