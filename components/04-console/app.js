require('colors');

const { inquirerMenu, 
        pause,
        readInput } = require('./helpers/inquirer');
const { saveDb } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {

    let opt ='';
    const tasks = new Tasks();

    do{
        // Print the menu
        opt = await inquirerMenu();

        switch(opt) {
            case '1':
                //Create task
                const desc = await readInput('Description:');
                tasks.createTask( desc );
            break;
            case '2':
                // Show taks
                console.log( tasks.listArr );
            break;
            case '3':
                // Create
            break;
            case '4':
                // Create
            break;
            case '5':
                // Create
            break;
            case '6':
                // Create
            break;
            case '0':
                // Create
            break;
        };

        saveDb( tasks.listArr );

        await pause();
        
    } while ( opt !== '0' );

}

main();