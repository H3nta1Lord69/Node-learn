const jwt = require('jsonwebtoken');

const generateJWT = ( uid = '' ) => {

    return new Promise(( resolve, reject ) => {

        const payload = { uid };

        jwt.sign( payload, process.env.SECRETPRIVATEKEY, {
            expiresIn: '2h'
        }, ( err, token ) => {

            if( err ) {
                console.log(err);
                reject( `Token doesn't generate` )
            } else {
                resolve( token );
            }

        })

    })

}


module.exports = {
    generateJWT
}