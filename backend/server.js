const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(cors());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'konyvtaros',
  port: 3307,
  
});


db.connect((err) => {
  if (err) {
    console.error('Hiba történt az adatbázis kapcsolatnál:', err);
    return;
  }
    console.log('Adatbázis kapcsolódás sikeres.');
});

app.get('/api/konyvek', (req, res) => {
  const query = 'SELECT * FROM konyvek';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching books:', err);
      res.status(500).send('Error fetching books');
      return;
    }
    res.json(results);
  });
});

app.delete('/api/konyvek/:id', (req, res) => {
  const bookId = req.params.id;
  const query = 'DELETE FROM konyvek WHERE konyv_id = ?';
  db.query(query, [bookId], (err, result) => {
    if (err) {
      console.error('Error deleting book:', err);
      res.status(500).send('Error deleting book');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Book not found');
      return;
    }
    res.send('Book deleted successfully');
  });
});

app.post('/api/konyvek', (req, res) => {
  const { cim, alcim, isbn, kiado_id, leiras } = req.body;
  const query = 'INSERT INTO konyvek (cim, alcim, isbn, kiado_id, leiras) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [cim, alcim, isbn, kiado_id, leiras], (err, result) => {
    if (err) {
      console.error('Error adding book:', err);
      res.status(500).send('Error adding book');
      return;
    }
    res.status(201).send(`Book added with ID: ${result.insertId}`);
  });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


