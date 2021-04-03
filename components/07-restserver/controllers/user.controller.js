const { response, request } = require('express')
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const userGet = (req = request, res = response) => {

    const { q, name = 'No name', edad, page = 1, limit } = req.query;
    
    res.json({
        msg: 'Hello get - controller',
        q,
        name,
        edad,
        page,
        limit
    });

}

const userPut = (req, res = response) => {

    const { id } = req.params.id;

    res.json({
        msg: 'Hello put - controller',
        id
    });

}

const userPost = async(req, res = response) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // Verify trusty email
    const emailExists = await User.findOne({ email });
    if( emailExists ) {
        return res.status(400).json({
            error: 'The email already exists.'
        });
    }


    // Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    // Save on DB
    await user.save();

    res.json({
        msg: 'Hello post - controller',
        user
    });

}

const userDelete = (req, res = response) => {

    res.json({
        msg: 'Hello delete - controller'
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