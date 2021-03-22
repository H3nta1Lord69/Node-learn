const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you gonna do?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green } Search by city.`
            },
            {
                value: 2,
                name: `${ '2.'.green } History.`
            },
            {
                value: 0,
                name: `${ '3.'.green } Exit.`
            }
        ]
    }
]

const inquirerMenu = async() => {

    console.clear();
    console.log('=========================='.cyan);
    console.log('     Choose an option'.white);
    console.log('==========================\n'.cyan);


    const { option } = await inquirer.prompt(menuOpts);

    return option;

};

const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${ 'ENTER'.blue } to continue`
        }
    ]
    
    console.log('\n');

    await inquirer.prompt(question)

};

const readInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Please input any value.'
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;

}

const deleteListTasks = async( tasks = [] ) =>{

    const choices = tasks.map( (task, i) => {

        const idx = `${ i + 1 }.`.cyan;
        return {
            value: task.id,
            name: `${ idx } ${ task.desc }`
        }
        
    });

    choices.unshift({
        value: '0',
        name: '0.'.cyan + 'Back'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Choose the one you want to delete',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);
    return id;

}

const confirm = async( message ) => {
    const cQuestion = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(cQuestion);
    return ok;

}

const showChecklist = async( tasks = [] ) =>{

    const choices = tasks.map( (task, i) => {

        const idx = `${ i + 1 }.`.cyan;
        return {
            value: task.id,
            name: `${ idx } ${ task.desc }`,
            checked: ( task.completed ) ? true : false
        }
        
    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select the tasks',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(preguntas);
    return ids;

}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    deleteListTasks,
    confirm,
    showChecklist
}