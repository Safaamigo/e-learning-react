const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express()
app.use(cors())

app.get('/' , (re , res)=>{
    return res.json("from backend side")
})

app.listen(3001, ()=>{
    console.log(`server is running on port 3001`)
});
   
//Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@$$w0rd',
    database: 'edu'
  });
  
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to database');
  });
  
