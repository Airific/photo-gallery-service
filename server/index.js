const express = require('express');
const path = require('path');
const db = require('./db.js');

const port = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/listings/gallery/:id', (req, res) => {
  const { id } = req.params;
  db.getImgById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/listings/header/:id', (req, res) => {
  const { id } = req.params;
  db.getHeaderById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log('connected');
});
