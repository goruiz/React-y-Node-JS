// Importación del módulo Router de Express
const { Router } = require('express');

// Inicialización del enrutador
const router = Router();

// Importación de las funciones del controlador de tareas
const { getAllTasks, getTask, createTask,  deleteTask,  updateTask } = require('../controllers/tasks.controller.js');

// Rutas definidas

// Ruta para obtener todas las tareas
router.get('/tasks', getAllTasks);

// Ruta para obtener una tarea específica (por ejemplo, tarea con ID 10)
router.get('/tasks/:id', getTask);

// Ruta para crear una nueva tarea
router.post('/tasks', createTask);

// Ruta para eliminar una tarea
router.delete('/tasks/:id', deleteTask);

// Ruta para actualizar una tarea
router.put('/tasks/:id', updateTask);

// Exportación del enrutador para su uso en otras partes de la aplicación
module.exports = router;
