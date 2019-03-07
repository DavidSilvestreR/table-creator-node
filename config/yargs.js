const objeto = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprimir en concola la tabla de multiplicar', objeto)
    .command('crear', 'Generar un chivo con la tabla multiplicar', objeto)
    .help()
    .argv;
module.exports = {
    argv
}