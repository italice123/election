const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

module.exports = function () {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'eltmsdb'
    });

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);

    });
    
    return connection;
};

