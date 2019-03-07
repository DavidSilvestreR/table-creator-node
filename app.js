const argv = require('./config/yargs').argv;
const colors = require('colors')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let command = argv._[0];
let argv2 = process.argv;
switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla.blue))
            .catch(error => console.log(error))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(error => console.log(error))
        break;
    default:
        console.log('No se re conoce comando');
}