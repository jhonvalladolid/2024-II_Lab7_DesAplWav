const Insumo = require('../models/InsumoModel');
const Proveedor = require('../models/ProveedorModel');

// Listar todos los insumos y sus proveedores
module.exports.listarInsumos = (req, res) => {
    Insumo.find({})
        .populate('idproveedor', 'nombrecia')
        .exec((error, insumos) => {
            if (error) {
                return res.status(500).json({
                    message: 'Error mostrando los insumos'
                });
            }
            // Buscar proveedores y pasar ambos a la vista
            Proveedor.find({}, (errorProveedores, proveedores) => {
                if (errorProveedores) {
                    return res.status(500).json({
                        message: 'Error obteniendo los proveedores'
                    });
                }
                res.render('insumos', { insumos: insumos, proveedores: proveedores });
            });
        });
};

// Crear un nuevo insumo
module.exports.crearInsumo = (req, res) => {
    const nuevoInsumo = new Insumo({
        nominsumo: req.body.nominsumo,
        idproveedor: req.body.idproveedor,
        preUni: req.body.preUni,
        stock: req.body.stock,
        fechaVencimiento: req.body.fechaVencimiento, // Nuevo campo
        categoria: req.body.categoria // Nuevo campo
    });

    nuevoInsumo.save((error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el insumo'
            });
        }
        res.redirect('/insumos');
    });
};

// Editar un insumo existente
module.exports.editarInsumo = (req, res) => {
    const id = req.body.id;
    const nominsumo = req.body.nominsumo;
    const idproveedor = req.body.idproveedor;
    const preUni = req.body.preUni;
    const stock = req.body.stock;
    const fechaVencimiento = req.body.fechaVencimiento; // Nuevo campo
    const categoria = req.body.categoria; // Nuevo campo

    Insumo.findByIdAndUpdate(id, { nominsumo, idproveedor, preUni, stock, fechaVencimiento, categoria }, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando el insumo'
            });
        }
        res.redirect('/insumos');
    });
};

// Borrar un insumo
module.exports.borrarInsumo = (req, res) => {
    const id = req.params.id;

    Insumo.findByIdAndRemove(id, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando el insumo'
            });
        }
        res.redirect('/insumos');
    });
};
