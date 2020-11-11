const argv = require('yargs').argv;
const colors = require('colors')
const { crearArchivo } = require('./multiplicar/multiplicar')


//console.log(process.argv);
let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

console.log('============================='.green);
/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e=>{
        console.log(e);
    });
    */