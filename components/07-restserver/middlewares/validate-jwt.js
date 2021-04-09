const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user')

const validateJWT = async( req = request, res = response, next  ) => {

    const token = req.header('x-auth');

    if( !token ) {
        return res.status(401).json({
            msg: `Unauthorized access`
        });
    }

    try {

        const { uid } = jwt.verify( token, process.env.SECRETPRIVATEKEY );

        // TODO: Read user from the uid
        const user = await User.findById( uid );

        if( !user ) {
            return res.status(401).json({
                msg: `User doesn't exist`
            }); 
        }

        //TODO: Verify if the user is not disabled
        if( !user.active ) {
            return res.status(401).json({
                msg: `Invalid user`
            });
        }

        req.user = user;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: `Invalid token`
        })
    }
    
}


module.exports = {
    validateJWT
}