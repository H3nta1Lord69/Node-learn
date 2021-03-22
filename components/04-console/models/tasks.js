const Task = require('./task')


class Tasks {

    _list = {};

    get listArr() {

        const list = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push(task);
        })

        return list;

    }

    constructor() {

        this._list = {};

    }

    deleteTask( id = '' ) {

        if( this._list[id] ){
            delete this._list[id];
        }
        
    }

    loadTasks( tasks = [] ) {

        tasks.forEach( task => {
            this._list[task.id] = task;
        });

    }

    createTask( desc = '' ) {

        const task = new Task(desc);

        this._list[task.id] = task;

    }

    completeList() {

        console.log()
        this.listArr.forEach( (task, i) => {

            const idx = `${i + 1}`.cyan;
            const {desc, completed} = task;
            const state = (completed)
                            ? 'Completed'.green
                            : 'Pending'.red;
            console.log(`${idx} ${desc}: ${state}`);

        });
        
    }

    completingList( completadas = true ) {

        console.log()
        let count = 0;
        this.listArr.forEach( task => {

            const {desc, completed} = task;
            const state = (completed)
                            ? 'Completed'.green
                            : 'Pending'.red;
            if(completadas){

                if ( completed ) {
                    // Completed tasks
                    count += 1;
                    console.log(`${count.toString().cyan}. ${desc}: ${completed.green}`);
                };

            } else {

                if ( !completed ) {
                    // Pending tasks
                    count += 1;
                    console.log(`${count.toString().cyan}. ${desc}: ${state.red}`);
    
                };

                };

        });
        
    }

    toggleCompleted( ids = [] ) {

        ids.forEach( id => {

            const task = this._list[id];
            if(!task.completed) {
                task.completed = new Date().toISOString()
            }

        });

        this.listArr.forEach( task => {

            if ( !ids.includes(task.id) ) {
                this._list[task.id].completed = null;
            }

        });

    }

}

module.exports = Tasks;