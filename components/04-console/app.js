require('colors');

const { inquirerMenu, 
        pause,
        readInput,
        deleteListTasks,
        confirm,
        showChecklist } = require('./helpers/inquirer');
const { saveDb,
        readDb } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {

    let opt ='';
    const tasks = new Tasks();

    const tasksDb = readDb();

    if(tasksDb){
        // Load tasks
        tasks.loadTasks( tasksDb );
    }

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
                tasks.completeList();
            break;
            case '3':
                // Completed tasks
                tasks.completingList(true);
            break;
            case '4':
                // Pending Tasks
                tasks.completingList(false);
            break;
            case '5':
                // Checklist
                const ids = await showChecklist( tasks.listArr );
                tasks.toggleCompleted( ids )
            break;
            case '6':
                // Delete tasks
                const id = await deleteListTasks( tasks.listArr );
                if( id !== '0' ){
                    const confirmar = await confirm('Are you sure to delete this entry?');
                    if( confirmar ) {
                        tasks.deleteTask(id);
                        console.log('Succesfully deleted!');
                    }
                }
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