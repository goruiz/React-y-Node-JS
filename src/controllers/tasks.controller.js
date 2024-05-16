// Importa el módulo 'pool' que maneja la conexión con la base de datos
const pool = require('../db');

// Función para obtener todas las tareas
const getAllTasks = async (req, res) => {
    try {
        // Consulta todas las tareas desde la base de datos
        const result = await pool.query("SELECT * FROM tasks");
        // Envía los datos de las tareas en formato JSON como respuesta
        res.json(result.rows);
        // Envía un mensaje indicando que las tareas se han obtenido con éxito
        console.log("Tareas obtenidas");
    } catch (error) {
        // Maneja cualquier error que ocurra durante la ejecución de la consulta
        next(error);
    }
};

// Función para obtener una sola tarea
const getTask = async (req, res) => {
    try {
        const { id } = req.params; // Desestructura el objeto task para obtener el id
        // Consulta una tarea específica desde la base de datos utilizando el ID proporcionado
        const result = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);
        // Manejo en el caso de que no haya resultados
        if (result.rows.length === 0) return res.status(404).json({ message: "Task not found" });
        res.json(result.rows[0]);
    } catch (error) {
        // Maneja cualquier error que ocurra durante la ejecución de la consulta
        next(error);

    }
};

// Función para crear una tarea
const createTask = async (req, res) => {
    const task = req.body;
    const { title, description } = task; // Desestructura el objeto task para obtener title y description

    try {
        // Inserta una nueva tarea en la base de datos
        const result = await pool.query("INSERT INTO tasks (title,description) VALUES ($1,$2) RETURNING *", [title, description]);
        // Envía una respuesta indicando que la tarea ha sido creada
        res.json(result.rows[0]);
        console.log("Tarea creada:", result.rows[0]);
    } catch (error) {
        // Maneja cualquier error que ocurra durante la inserción
        next(error);

    }
};

// Función para eliminar una tarea
const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        // Elimina una tarea de la base de datos utilizando el ID proporcionado
        const result = await pool.query("DELETE FROM tasks WHERE id=$1", [id]);
        // Envía una respuesta indicando que la tarea ha sido eliminada
        res.json({ message: "Task deleted successfully" });
        console.log("Tarea eliminada:", id);
    } catch (error) {
        // Maneja cualquier error que ocurra durante la eliminación
        next(error);

    }
};

// Función para actualizar una tarea
const updateTask = async (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params; // Desestructura el objeto task para obtener el id

    try {
        // Actualiza una tarea en la base de datos utilizando el ID proporcionado
        const result = await pool.query("UPDATE tasks SET title=$1, description=$2 WHERE id=$3 RETURNING *", [title, description, id]);
        // Envía una respuesta con la tarea actualizada en formato JSON
        if (result.rows.length === 0) return res.status(404).json({ message: "Task not found" });
        res.json(result.rows[0]);
        console.log("Tarea actualizada:", result.rows[0]);
    } catch (error) {
        // Maneja cualquier error que ocurra durante la actualización
        next(error);
    }
};

// Exporta las funciones para que puedan ser utilizadas en otros archivos
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
};
