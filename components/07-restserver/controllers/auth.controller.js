const { response, request } = require("express");
const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const { generateJWT } = require("../helpers/generate-jwt");
const { googleVerify } = require('../helpers/google-verify');


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

const googleSignIn = async(req, res = response) => {

    const { id_token } = req.body;

    
    try {

        const { correo, nombre, img } = await googleVerify( id_token );

        //
        let user = await User.findOne({ correo });

        // If user doesn-t exists we need to created
        if( !user ) {
            const data = {
                nombre,
                correo,
                password: ':P',
                img,
                google: true
            };

            user = new User( data )
            await user.save();
        }
        
        // If user in DB is active
        if( !user.active ) {
            return res.status(401).json({
                msg: 'User blocked, contact with an administrator.'
            })
        }
        
        // Generate JWT
        const token = await generateJWT( user.id );

        res.json({
            user,
            token
        });

    } catch (error) {
        
        res.status(400).json({
            msg: 'Google token not valid.'
        })

    }


}


module.exports = {
    login,
    googleSignIn
}