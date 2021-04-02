const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.MONGO_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Database correctly connected.');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error in the Database!');
    }

}


module.exports = {
    dbConnection
}