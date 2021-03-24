require('dotenv').config();

const { inquirerMenu, 
        pause, 
        readInput, 
        listPlaces} = require("./helpers/inquirer");
const Searchs = require("./models/searchs");


const main = async() => {

    const search = new Searchs();
    let opt = '';

    do{

        opt = await inquirerMenu();

        switch( opt ) {

            case 1:
                // Show message
                const termSearch = await readInput('City: ');
                
                // Search places
                const places = await search.city( termSearch );
                
                // Select the place from the search
                const idSelected = await listPlaces(places);
                if( idSelected === '0' ) continue;

                const placeSelected = places.find( p => p.id === idSelected );

                // Save in db
                search.addHistory( placeSelected.name );

                // Weather
                const weather = await search.weatherPlace( placeSelected.lat, placeSelected.lng );

                // Data of the place (especifically the weather)

                console.clear();
                console.log('\nInformation of the city\n'.cyan );
                console.log('City:', placeSelected.name.cyan );
                console.log('Lat:', placeSelected.lat );
                console.log('Lng:', placeSelected.lng );
                console.log('Temperature:', weather.temp );
                console.log('Min:', weather.min );
                console.log('Max:', weather.max );
                console.log('Estado:', weather.desc.cyan );

            break;

            case 2:

                search.historyCapital.forEach( (place, id) => {
                    const idx = `${id + 1}. `.cyan;
                    console.log(`${ idx }${place}`);
                })         

            break;

        }

        if ( opt !==0 ) await pause();
        
    } while ( opt !== 0 );

}

main();