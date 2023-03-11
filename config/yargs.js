const argv = require("yargs")
  .option("b", {
    alias: "base",
    describe: "Base de multiplicar",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "limit",
    describe: "Limite de multiplicaciones",
    type: "number",
    demandOption: true,
  })
  .option("i", {
    alias: "imprimir",
    type: "boolean",
    describe: "Imprimir el resultado de la multiplicación",
    default: false,
  })
  .check(({ base, limit }) => {
    if (isNaN(base)) throw "La base debe ser un número";
    if (isNaN(limit)) throw "El limite debe ser un número";

    return true;
  }).argv;

module.exports = argv;
