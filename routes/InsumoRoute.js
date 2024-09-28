const express = require('express');
const router = express.Router();
const insumoController = require('../controllers/InsumoController');

// Rutas para listar, crear, editar y borrar insumos

// Listar todos los insumos con sus proveedores relacionados
router.get('/insumos', insumoController.listarInsumos);

// Crear un nuevo insumo (Formulario y acción POST)
router.post('/insumos/crear', insumoController.crearInsumo);

// Editar un insumo existente (Formulario y acción POST)
router.post('/insumos/editar', insumoController.editarInsumo);

// Borrar un insumo por ID
router.get('/insumos/borrar/:id', insumoController.borrarInsumo);

module.exports = router;
