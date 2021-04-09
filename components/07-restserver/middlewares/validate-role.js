const { response, request } = require("express")


const isAdmin = ( req = request, res = response, next ) => {

    if( !req.user ){
        return res.status(500).json({
            msg: 'Verify role before validate the token'
        });
    }

    const { role, name } = req.user;

    if( role !== 'ADMIN_ROLE' ) {
        return res.status(401).json({
            msg: `${name} isn't and administrator`
        });
    }

    next();
}

const hasRole = ( ...roles ) => {

    return ( req = request, res = response, next ) => {
        
        if( !req.user ){
            return res.status(500).json({
                msg: 'Verify role before validate the token'
            });
        }

        if( !roles.includes( req.user.role ) ) {
            return res.status(401).json({
                msg: `The service need one of the following roles ${ roles }`
            });
        }

        next();

    }

}


module.exports = {
    isAdmin,
    hasRole
}