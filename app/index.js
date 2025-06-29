const express = require('express');
const db = require('./db');
const app = express();

app.get('/', async (req, res) => {
  try {
    await db.getConnection();
    res.send('Connected to DB!');
  } catch (err) {
    res.status(500).send('DB connection failed');
  }
});

app.listen(3000, () => console.log('App listening on port 3000'));
//komentarz 2 xdddddddxd