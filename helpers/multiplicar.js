const fs = require("fs");
require("colors");

const crearArchivo = async (base = 5, limit = 10, imprimir) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= limit; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".blue} ${i} ${"=".blue} ${base * i}\n`;
    }

    if (imprimir) {
      console.log("====================".green);
      console.log(`    Tabla del: ${base}`.green);
      console.log("====================".green);

      console.log(consola);
    }
    fs.writeFileSync(`./files/Tabla_${base}.txt`, salida);

    return `Tabla_${base}.txt`;
  } catch (err) {
    throw Error(err);
  }
};

module.exports = {
  crearArchivo,
};
