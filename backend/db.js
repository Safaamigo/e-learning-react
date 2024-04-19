const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'edu'
});

const authenticateUser = (email, password, callback) => {
    const query = 'SELECT * FROM accounts WHERE email = ? AND password = ?';
    db.query(query, [email, password], (error, results, fields) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

module.exports = { db, authenticateUser };
