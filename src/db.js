//ARCHIVO PARA LA CONEXIÓN A LA BASE DE DATOS
const { Pool } = require('pg'); //La clase Pool permite crear una conexión en el siguiente paso
const {db} = require('./config');
const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database
});
module.exports = pool;