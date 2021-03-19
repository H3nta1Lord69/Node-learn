require('colors');


const showMenu = () => {

    return new Promise( resolve => {
        
        console.clear();
        console.log('=========================='.cyan);
        console.log('     Choose an option'.cyan);
        console.log('==========================\n'.cyan);

        console.log(`${ '1'.green }. Create a task`);
        console.log(`${ '2'.green }. Show tasks`);
        console.log(`${ '3'.green }. Show completed tasks`);
        console.log(`${ '4'.green }. Show pending tasks`);
        console.log(`${ '5'.green }. Completing tasks`);
        console.log(`${ '6'.green }. Delete tasks`);
        console.log(`${ '0'.green }. Exit \n`);
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // `question` Show information to the user
        readline.question('Choose an option: ', (opt) => {
            readline.close();
            resolve(opt);
        });

    });

};

const pausa = () => {

    return new Promise( resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        // `question` Show information to the user
        readline.question(`\nPress ${ 'ENTER'.blue } to continue\n`, (opt) => {
            readline.close();
            resolve();
        });

    });

};

module.exports = {
    showMenu,
    pausa
}