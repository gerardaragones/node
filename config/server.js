const app = require('../src/app');
// Configurar el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;
// Función para iniciar el servidor
function startServer() {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
}
// Exportar la función para iniciar el servidor
module.exports = {
  start: startServer
};