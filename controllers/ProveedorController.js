const Proveedor = require('../models/ProveedorModel');

// Listar todos los proveedores
module.exports.listarProveedores = (req, res) => {
    Proveedor.find({}, (error, proveedores) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los proveedores'
            });
        }
        res.render('proveedores', { proveedores: proveedores });
    });
};

// Crear un nuevo proveedor
module.exports.crearProveedor = (req, res) => {
    const nuevoProveedor = new Proveedor({
        nombrecia: req.body.nombrecia,
        contacto: req.body.contacto,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    });

    nuevoProveedor.save((error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el proveedor'
            });
        }
        res.redirect('/proveedores');
    });
};

// Editar proveedor existente
module.exports.editarProveedor = (req, res) => {
    const id = req.body.id;
    const nombrecia = req.body.nombrecia;
    const contacto = req.body.contacto;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;

    Proveedor.findByIdAndUpdate(id, { nombrecia, contacto, telefono, direccion }, (error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando al proveedor'
            });
        }
        res.redirect('/proveedores');
    });
};

// Borrar un proveedor
module.exports.borrarProveedor = (req, res) => {
    const id = req.params.id;

    Proveedor.findByIdAndRemove(id, (error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando al proveedor'
            });
        }
        res.redirect('/proveedores');
    });
};
