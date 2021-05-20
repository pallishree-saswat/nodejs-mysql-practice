const express = require('express')
const mysql = require('mysql')

const app = express()

//db connect
const db = mysql.createConnection({
    host:'localhost',
    user:'palli',
    password:'12101996',
    database:'db'
});

db.connect();

//routes
app.get('/users', (req,res) => {
    const sql = 'SELECT * FROM users';

    db.query(sql, (err,result) => {
        if(err) console.log(err)
        res.send(result)
    });
});

//listen to server
app.listen(5000, () => console.log('server started'))