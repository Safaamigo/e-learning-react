const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { db, authenticateUser } = require('./db');


const app = express()
app.use(cors())

app.get('/' , (re , res)=>{
    return res.json("from backend side")
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  authenticateUser(email, password, (error, results) => {
      if (error) {
          res.status(500).json({ error: 'An error occurred while authenticating user' });
      } else {
          if (results.length > 0) {
              res.status(200).json({ message: 'Login successful', user: results[0] });
          } else {
              res.status(401).json({ error: 'Invalid email or password' });
          }
      }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
