require('dotenv').config();

const express = require('express');


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Routes of the application
        this.routes();

    }

    middlewares() {

        // Public directory
        this.app.use( express.static('public') )

    }

    routes() {

        // Get endpoint
        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'Hello get'
            });
        });

        // Put endpoint
        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'Hello put'
            });
        });

        // Post endpoint
        this.app.post('/api', (req, res) => {
            res.json({
                msg: 'Hello post'
            });
        });

        // Delete endpoint
        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'Hello delete'
            });
        });

        // Patch endpoint
        this.app.patch('/api', (req, res) => {
            res.json({
                msg: 'Hello patch'
            });
        });

    }

    listen() {
        
        this.app.listen(this.port, () => {
            console.log('Server running at', this.port)
        });

    }

}

module.exports = Server;