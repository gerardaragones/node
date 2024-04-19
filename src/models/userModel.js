const { Schema,  model  } = require("mongoose");

const userSchema = new Schema({
    username: {
      type: String,
      // trim (espacios iniciales y finales eliminados)
      trim: true,
      required: [true, 'El usuario es requerido'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'El email es requerido'],
      unique: true,
      lowercase: true,
      trim: true,
      validate:{
        validator: (value) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: 'Correo electrónico inválido'
      }
    },
    password:{
      type: String,
      required: true,
      validate:{
        validator: (value) => {
        // Utiliza una expresión regular para asegurar que la contraseña tenga al menos 8 caracteres
        // y contenga al menos una letra mayúscula, una minúscula, un número y un carácter especial
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(value);
        },
        message: 'La contraseña debe tener al menos 8 caracteres, los cuales contengan una letra mayúscula, una minúscula, un número y un carácter especial'
      }
    },
  });

const User = model('User', userSchema);

module.exports = User;
