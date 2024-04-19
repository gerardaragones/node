// routes.js
const express = require('express');
const router = express.Router();
const MainController = require('../controllers/mainController'); 
// Definir una ruta principal
router.get('/', MainController.showMainPage);
// Exportar el router para ser utilizado en app.js
module.exports = router;