const { response, request } = require('express')


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

const userPost = (req, res = response) => {

    const { name, edad } = req.body;

    res.json({
        msg: 'Hello post - controller',
        name,
        edad
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