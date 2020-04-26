exports.proyectosHome = (req, res ) => {
    // se le pueden pasar parametros a render
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}

exports.nuevoProyecto = (req, res) => {
    // Enviar a la consola lo que el usuario escriba
    console.log(req.body);
}