const { crearArchivo } = require("./helpers/multiplicar");
const color = require("colors");
const argv = require("./config/yargs");

console.clear();

crearArchivo(argv.b, argv.l, argv.i)
  .then((nombreArchivo) => {
    console.log(color.green(nombreArchivo), "creado");
  })
  .catch((e) => {
    throw Error(e);
  });
