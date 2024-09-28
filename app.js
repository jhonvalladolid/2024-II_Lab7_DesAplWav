const express = require('express');
const app = express();

const db = require('./db');

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');

// Middleware para manejar formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requerir las rutas de clientes, proveedores e insumos
const clientes = require('./routes/ClienteRoute');
const proveedores = require('./routes/ProveedorRoute');
const insumos = require('./routes/InsumoRoute');

// Usar las rutas
app.use(clientes);
app.use(proveedores); // Añadido para proveedores
app.use(insumos);     // Añadido para insumos

// Servir archivos estáticos desde la carpeta public
app.use(express.static('public'));

// Iniciar el servidor
app.listen(4000, () => {
    console.log('¡Server UP! en http://localhost:4000');
});
