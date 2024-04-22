// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard')

// Definir una ruta principal
router.get('/signup', authController.ShowForm);
router.post('/signup', authController.PostForm);
router.get('/login', authController.ShowLogin);
router.post('/login', authController.PostLogin);
//res.render('users/user-profile', { userInSession: req.session.currentUser });
router.post('/logout', (req, res, next) => {
    req.session.destroy(err => {
      if (err) next(err);
      res.redirect('/');
    });
});

module.exports = router;