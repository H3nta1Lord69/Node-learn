const { response, request } = require("express");
const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const { generateJWT } = require("../helpers/generate-jwt");



const login = async(req = request, res = response) => {

    const { email, password } = req.body;

    try {

        // TODO: Verify if email exists
        const user = await User.findOne({ email });
        if( !user ) {
            return res.status(400).json({
                msg: `User / Email are incorrect`
            });
        }

        // TODO: Active user in database
        if( !user.active ) {
            return res.status(400).json({
                msg: `User doesn't exists`
            });
        }

        // TODO: Verify password
        const validPassword = bcryptjs.compareSync( password, user.password );
        if( !validPassword ) {
            return res.status(400).json({
                msg: `Password is incorrect`
            });
        }


        // TODO: Generate JWT
        const token = await generateJWT( user.id );

        res.json({
            msg: 'Login ok',
            user,
            token
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Something's went wrong"
        })
    }


}


module.exports = {
    login
}