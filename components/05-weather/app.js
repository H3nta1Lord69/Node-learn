const { inquirerMenu, 
        pause, 
        readInput } = require("./helpers/inquirer");
const Searchs = require("./models/searchs");


const main = async() => {

    const search = new Searchs();
    let opt = '';

    do{

        opt = await inquirerMenu();

        switch( opt ) {

            case 1:
                // Show message

                const place = await readInput('City: ');
                console.log(place);

                // Search places

                // Select the place from the search

                // Data of the place, especifically the weather

                console.log('\nInformation of the city\n'.cyan);
                console.log('City:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperature:', );
                console.log('Min:', );
                console.log('Max:', );

            break;

            case 1:

            break;

        }

        if ( opt !==0 ) await pause();
        
    } while ( opt !== 0 );

}

main();