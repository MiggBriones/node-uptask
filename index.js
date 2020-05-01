const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// helpers con algunas funciones
const helpers = require('./helpers');

// Crear la conexión a la BD
const db = require('./config/db');

// Importar el modelo
require('./models/Proyectos');

db.sync()
    .then( () => console.log('Conectado al Servidor de BD.'))
    .catch(error => console.log(error) );

// crear una app de express
const app = express();

// Donde cargar los archivos estaticos
app.use(express.static('public'));

// Habilitar pug
app.set('view engine', 'pug');

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// Pasar var dump a la aplicación
app.use( (req, res, next) =>{
    res.locals.vardump = helpers.vardump;
    next();
});

// habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true }));

app.use('/', routes() );

app.listen(3000);