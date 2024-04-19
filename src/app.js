const express = require('express');
const mainRoutes = require('../src/routes/mainRoutes');
const authRoutes = require('../src/routes/authRoutes');
const hbs       = require("hbs");
const path      = require("path");
const bodyParser = require('body-parser');
const connectToMongo = require('../config/database')
// Crear una instancia de Express
const app = express();

connectToMongo();
app.set("view engine", "hbs");
//Seteo la carpeta views desde donde se buscaran las plantillas
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));
// Configurar middleware si es necesario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2. let know your app you will be using it
app.use(bodyParser.urlencoded({ extended: true }));
// Configurar las rutas
app.use('/', mainRoutes);
app.use('/auth', authRoutes);

// Exportar la aplicación para ser utilizada en otros archivos
module.exports = app;