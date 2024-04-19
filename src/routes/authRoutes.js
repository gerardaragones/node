// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 


// Definir una ruta principal
router.get('/signup', authController.ShowForm);
router.post('/signup', authController.PostForm);
router.get('/login', authController.ShowLogin);
router.post('/login', authController.PostLogin);

module.exports = router;