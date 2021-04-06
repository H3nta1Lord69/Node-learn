const { response, request } = require('express')
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const userGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const condition = { active: true };

    const [ total, users ] = await Promise.all([
        User.countDocuments( condition ),
        User.find( condition )
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    
    res.json({
        total,
        users
    });

}

const userPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, email, ...others } = req.body;

    // TODO: validate against db
    if( password ) {
        // Encrypt password
        const salt = bcryptjs.genSaltSync();
        others.password = bcryptjs.hashSync( password, salt );
    }

    const user = await User.findByIdAndUpdate( id, others );

    res.json(user);

}

const userPost = async(req, res = response) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    // Save on DB
    await user.save();

    res.json({
        user
    });

}

const userDelete = async(req, res = response) => {

    const { id } = req.params;

    const user = await User.findByIdAndUpdate( id, { active: false } );

    res.json({
        id
    });

}

const userPatch = (req, res = response) => {
    
    res.json({
        msg: 'Hello patch - controller'
    });

}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}