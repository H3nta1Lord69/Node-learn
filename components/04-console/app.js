require('colors');

const { showMenu, pausa } = require('./helpers/exit-messages')

console.clear();

const main = async() => {
    console.log('Hello there');
    let opt ='';

    do{
        
        opt = await showMenu();
        console.log({ opt });
        if ( opt !== '0' ) await pausa();
        
    } while ( opt !== '0' );

}

main();