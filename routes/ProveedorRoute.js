const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/ProveedorController');

// Rutas para listar, crear, editar y borrar proveedores

// Listar todos los proveedores
router.get('/proveedores', proveedorController.listarProveedores);

// Crear un nuevo proveedor (Formulario y acción POST)
router.post('/proveedores/crear', proveedorController.crearProveedor);

// Editar un proveedor existente (Formulario y acción POST)
router.post('/proveedores/editar', proveedorController.editarProveedor);

// Borrar un proveedor por ID
router.get('/proveedores/borrar/:id', proveedorController.borrarProveedor);

module.exports = router;
