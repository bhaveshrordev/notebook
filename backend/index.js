// index.js
const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = 3000;

connectToMongo();

app.get('/', (req, res) => {
  res.send('Hello from backend');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});