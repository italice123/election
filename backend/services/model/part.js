const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const con = require("../../config/db")

const retrieve = con();

retrieve.query('SELECT * FROM mt_part', function (result, fields){
    console.log(result);
});

retrieve.end(function (err) {

});

// ยังไม่ query ไม่ออก