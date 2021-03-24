const fs = require('fs');

const axios = require('axios');

class Searchs {

    history = [];
    dbPath = './db/database.json';

    constructor () {
        //TODO: Read db if exists

        this.readFromDB();

    }

    get historyCapital() {
        return this.history.map( place => {

            let words = place.split(' ');
            words = words.map( p => p[0].toUpperCase() + p.substring(1));

            return words.join(' ');

        })
    }

    get paramsMapBox() {
        return {

            access_token: process.env.MAPBOX_KEY,
            limit: 5,
            language: 'en'

        }
    }

    get paramsOpenWeather() {
        return {

            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'en'

        }
    }

    async city( place = '' ) {
        //TODO: http petition

        try{

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: this.paramsMapBox
            });

            const resp = await instance.get();    
            return resp.data.features.map( place => /* return a place in a implicit way */ ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1]
            }));

        } catch(err) {

            return []; // Return an empty array

        }
    }

    async weatherPlace ( lat, lon ) {

        try{

            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsOpenWeather, lat, lon }
            });

            const resp = await instance.get();
            const { weather, main } = resp.data

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }

        } catch (err) {
            console.log(err);
        }

    }

    addHistory(place = ''){
        
        //TODO: Prevent duplicity

        if( this.history.includes( place.toLocaleLowerCase() ) ){
            return;
        }
        this.history = this.history.splice(0,5);

        this.history.unshift( place.toLocaleLowerCase() );

        // Save in db
        this.saveInDb();
    
    }

    saveInDb() {

        const payload = {
            history: this.history
        }

        fs.writeFileSync(this.dbPath, JSON.stringify( payload ));

    }

    readFromDB() {

        if(!fs.existsSync(this.dbPath)) return;

        const info = fs.readFileSync( this.dbPath, { encoding: 'utf-8' } );
        const data = JSON.parse( info );

        this.history = data.history;

    }

}

module.exports = Searchs;