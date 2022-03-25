const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

const mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  database: 'movies',
  password: 'john'
});

app.use(express.static('client/dist'));


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

//Routes

app.get('/api/movies', (req, res) => {
  const querySTR = 'SELECT * FROM movies';
  connection.query(
    querySTR,
    function(err, results) {
      res.send(results);
    }
  );
});

app.get('/api/movies/search', (req, res) => {
  console.log(res.data);
  const searchValue = res.query.title;
  const querySTR = `SELECT * FROM movies WHERE ${searchValue}`;
  connection.query(
    querySTR,
    function(err, results) {
      res.send(results);
    }
  );
});

module.exports.connection = connection;