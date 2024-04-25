// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { isLoggedIn, isLoggedOut } = require('../../middleware/route-guard')

// Definir una ruta principal
router.get('/signup', isLoggedOut, authController.ShowForm);
router.post('/signup', authController.PostForm);
router.get('/login', isLoggedOut, authController.ShowLogin);
router.post('/login', isLoggedOut, authController.PostLogin);
router.post('/logout', isLoggedIn, (req, res, next) => {
    req.session.destroy(err => {
      if (err) next(err);
      res.redirect('/');
    });
});


module.exports = router;