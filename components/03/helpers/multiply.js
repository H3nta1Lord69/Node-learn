const fs = require('fs');

const fileCreate = async( base = 9, list = false, hasta = 10 ) => {

        try{

            let exit = '';


            for ( let i = 1; i <= hasta; i++){
                exit += `${ base } x ${ i } = ${ base * i }\n`;
            };

            if(list){

                console.log('==========================');
                console.log(`       Tabla del: ${ base }`);
                console.log('==========================');
                console.log(exit);

            };            

            fs.writeFileSync(`./results/tabla-${ base }.txt`, exit);

            return `tabla-${ base }.txt`;

        } catch(err) {
            throw err;
        }        

};

module.exports = {
    fileCreate
}