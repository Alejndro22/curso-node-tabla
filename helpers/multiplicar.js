import { writeFileSync } from 'node:fs';
import chalk from 'chalk';

const generarTabla = async (base = 5, list = false, until = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= until; i++) {
      salida += `${base} ${chalk.greenBright('x')} ${i} = ${chalk.blue.bold(
        base * i
      )}\n`;
      consola += `${base} x ${i} = ${base * i}\n`;
    }

    if (list) {
      // console.log(`Tabla del ${base}:`);
      console.log(chalk.yellow.underline(`Tabla del ${base}:\n`));
      console.log(salida);
    }

    writeFileSync(`./salida/tabla-${base}.txt`, consola);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

export { generarTabla };
