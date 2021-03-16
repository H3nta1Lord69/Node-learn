const fs = require('fs');


console.clear();
console.log('==========================');
console.log('       Tabla del: 6');
console.log('==========================');

const base = 6;
let exit = '';


for ( let i = 1; i <= 10; i++){
    exit += `${ base } x ${ i } = ${ base * i }\n`;
};


fs.writeFile(`tabla-${ base }.txt`, exit, (err) => {
    if(err) throw err;

    console.log('Archivo creado!');
})