
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-js-training',
    password: 'gayu',

  //  promise: Promise
});

module.exports = pool.promise();