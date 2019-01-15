const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var mysql = require('mysql');
const db = require('../../config/db');
var bcrypt = require('bcryptjs');
// const { getToken , verifyToken } = require('');

function register(json) {
    console.log(req.body);
    const obj = req.body;
    var hashedpassword = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hashedpassword;

    var values = [
        [req.body.username, req.body.password]
    ];
    var sql = `INSERT INTO user_info (username,password) VALUES ?`;
    db.connection.query(sql, [values], function (err, result) {
        if (err) {
            res.json(result_failed);
        } else {
            const finalResult = {
                result: 'success',
                data: ''
            };
            res.json(finalResult);
            console.log("record inserted")
        }
    });
    return finalResult;
}



