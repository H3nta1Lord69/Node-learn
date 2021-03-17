const { fileCreate } = require('./helpers/multiply')


console.clear();


fileCreate()
    .then( fileName => console.log(fileName, '`Created`') )
    .catch( err => console.log(err) );
