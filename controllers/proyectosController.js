const Proyectos = require('../models/Proyectos');

exports.proyectosHome = async(req, res ) => {
    const proyectos = await Proyectos.findAll();

    // se le pueden pasar parametros a render
    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}

exports.nuevoProyecto = async (req, res) => {
    // Enviar a la consola lo que el usuario escriba
    // console.log(req.body);

    // validar que tengamos algo en el input
    const { nombre } = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un Nombre al Proyecto'})
    }

    // si hay errores
    if(errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    } else {
        // No hay errores, insertar en la BD
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
    }
}