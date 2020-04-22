const express = require('express');
const router = express.Router();


module.exports = function() {
    // ruta para el home
    router.get('/', (req, res ) => {
        res.send('Home...');
    });
    router.get('/nosotros', (req, res ) => {
        res.send('Nosotros...');
    });

    return router;
}