const fs = require('fs');

const fileCreate = async( base = 9 ) => {

        try{

            console.log('==========================');
            console.log(`       Tabla del: ${ base }`);
            console.log('==========================');
            
            let exit = '';


            for ( let i = 1; i <= 10; i++){
                exit += `${ base } x ${ i } = ${ base * i }\n`;
            };


            fs.writeFileSync(`tabla-${ base }.txt`, exit);

            return `Archivo creado!`;

        } catch(err) {
            throw err;
        }        

};

module.exports = {
    fileCreate
}