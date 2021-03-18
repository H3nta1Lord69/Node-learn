const { fileCreate } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();


fileCreate( argv.b, argv.l, argv.h )
    .then( fileName => console.log(fileName, '`Created`') )
    .catch( err => console.log(err) );
