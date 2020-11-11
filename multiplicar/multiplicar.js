const fs = require('fs');
const { resolve } = require('path');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 0; i <= 10; i++) {
            console.log(`${base}*${i}=${base * i} \n`);
            data += `${base}*${i}=${base * i}  \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`EL archivo tabla-${base} ha sido guardado`);
        });

    });
}

module.exports = {
    crearArchivo
}
