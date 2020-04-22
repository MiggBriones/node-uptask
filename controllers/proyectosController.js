exports.proyectosHome = (req, res ) => {
    // se le pueden pasar parametros a render
    res.render('layout', {
        nombrePagina = 'Proyectos'
    });
}