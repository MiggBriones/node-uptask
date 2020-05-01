const express = require('express');
const router = express.Router();

// importar express validator
const {body } = require('express-validator/check');

// importar el controlador
const proyectosController = require('../controllers/proyectosController'); 


module.exports = function() {
    /* Se definen rutas, se puede observar que las peticiones pueden hacer hacia
        la misma ruta, pero con diferente método Para obtener, agregar información.

        Validación por medio de express-validator

        Se puede tener para una misma ruta, más de dos controladores; sería
        por orden de ejecución.
    */
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.nuevoProyecto);
    return router;
}