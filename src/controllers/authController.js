const User = require('../models/userModel');
const bcrypt = require('bcryptjs'); // Importar bcrypt aquí

const authController = {
    ShowForm(req, res) {
        res.render('signup');
    },

    async PostForm(req, res) {
        try {
            console.log(req.body);
            const { username, email, password } = req.body;
            
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(password, salt);
            
            const user = await User.create({username, email, password: hash}); // Guardar el hash en lugar de la contraseña original
            
            // Redireccionar al usuario a la página de inicio de sesión después de un registro exitoso
            res.redirect('/auth/login');
        } catch (err) {
            console.error(err.message);
            // Aquí puedes manejar el error y enviar un mensaje al usuario si es necesario
            res.render('signup', { errorMessage: err.message });
        }
    },

    ShowLogin(req, res) { // Método para mostrar el formulario de inicio de sesión
        res.render('login');
    },

    async PostLogin(req, res) { // Método para procesar el formulario de inicio de sesión
        try {
            const { username, email, password } = req.body;
            
            // Buscar al usuario por nombre de usuario y email
            const user = await User.findOne({ username, email });
            
            if (!user) {
                throw new Error('User not found');
            }
            
            const isMatch = await bcrypt.compare(password, user.password);
            
            if (isMatch) {
                res.render('main', { user });
            } else {
                throw new Error('Incorrect password');
            }
        } catch (err) {
            console.error(err.message);
            // Aquí puedes manejar el error y enviar un mensaje al usuario si es necesario
            res.render('login', { errorMessage: err.message });
        }
    }
};

module.exports = authController;