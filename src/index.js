// ARCHIVO PRINCIPAL QUE ARRANCA EL SERVIDOR

// Importación de módulos
const express = require('express'); // Importa el módulo express, que es un framework de Node.js para crear servidores
const morgan = require('morgan'); // Importa el módulo morgan, utilizado para el registro de solicitudes HTTP
const cors = require('cors'); // Permite comunicar los servidores del backend y el frontend de forma simple
const taskRoutes = require('./routes/tasks.routes.js'); // Importa las rutas relacionadas con las tareas desde el archivo tasks.routes.js

// Inicialización de la aplicación Express
const app = express(); // Crea una instancia de la aplicación Express y la guarda en la constante app

// Middleware de registro de solicitudes HTTP
app.use(cors()); 
app.use(morgan('dev')); // Utiliza el middleware de morgan en modo 'dev' para registrar las solicitudes HTTP en la consola
app.use(express.json()); // El servidor express permite enter los datos json

// Middleware de rutas relacionadas con las tareas
app.use(taskRoutes); // Utiliza el middleware de las rutas relacionadas con las tareas definidas en taskRoutes


app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})
// Configuración del puerto de escucha
const PORT = 4000; // Define el puerto en el que escuchará el servidor

// Inicio del servidor Express
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Muestra un mensaje en la consola indicando que el servidor está escuchando en el puerto especificado
});
