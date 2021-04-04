const Role = require('../models/role');
const User = require('../models/user');

// Verify if role exists
const rolExist = async( role = '' ) => {
    const roleExists = await Role.findOne({ role });
    if( !roleExists ) {
        throw new Error(`The role ${ role } isn't registered.`)
    }
}

// Verify if email is already registered
const emailExist = async( email = '' ) => {
    const emailExists = await User.findOne({ email });
    if( emailExists ) {
        throw new Error(`The email ${ email } already exists!`);
    }
}


module.exports = {
    rolExist,
    emailExist
}