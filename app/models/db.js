const mysql = require("mysql2");

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }

    connection.query('SELECT * FROM mau_sac', (error, results, fields) => {
        connection.release(); // Release the connection back to the pool
        if (error) {
            console.error('Error executing query:', error);
            return;
        }
        console.log('Ket noi thanh cong');
    });
});
module.exports = connection;
