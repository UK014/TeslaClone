const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'Tesla'
});

app.use('', express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint for checking if any black car is not sold
app.get('/checkBlackCar', (req, res) => {
  const query = 'SELECT * FROM Cars WHERE color = "black" AND status_ = "notsold"';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query: ', err);
      res.sendStatus(500); // Internal Server Error
      return;
    }

    if (results.length > 0) {
      const blackCarsNotSold = results.map(car => car.carname);
      const response = {
        status: 'found',
        carsNotSold: blackCarsNotSold
      };
      res.json(response);
    } else {
      const response = {
        status: 'not found'
      };
      res.json(response);
    }
  });
});

app.get('/checkWhiteCar', (req, res) => {
  const query = 'SELECT * FROM Cars WHERE color = "white" AND status_ = "notsold"';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query: ', err);
      res.sendStatus(500); // Internal Server Error
      return;
    }

    if (results.length > 0) {
      const whiteCarsNotSold = results.map(car => car.carname);
      const response = {
        status: 'found',
        carsNotSold: whiteCarsNotSold
      };
      res.json(response);
    } else {
      const response = {
        status: 'not found'
      };
      res.json(response);
    }
  });
});

app.get('/checkBlueCar', (req, res) => {
  const query = 'SELECT * FROM Cars WHERE color = "blue" AND status_ = "notsold"';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query: ', err);
      res.sendStatus(500); // Internal Server Error
      return;
    }

    if (results.length > 0) {
      const blueCarsNotSold = results.map(car => car.carname);
      const response = {
        status: 'found',
        carsNotSold: blueCarsNotSold
      };
      res.json(response);
    } else {
      const response = {
        status: 'not found'
      };
      res.json(response);
    }
  });
});

app.get('/checkGreenCar', (req, res) => {
  const query = 'SELECT * FROM Cars WHERE color = "green" AND status_ = "notsold"';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query: ', err);
      res.sendStatus(500); // Internal Server Error
      return;
    }

    if (results.length > 0) {
      const greenCarsNotSold = results.map(car => car.carname);
      const response = {
        status: 'found',
        carsNotSold: greenCarsNotSold
      };
      res.json(response);
    } else {
      const response = {
        status: 'not found'
      };
      res.json(response);
    }
  });
});

app.get('/checkRedCar', (req, res) => {
  const query = 'SELECT * FROM Cars WHERE color = "red" AND status_ = "notsold"';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query: ', err);
      res.sendStatus(500); // Internal Server Error
      return;
    }

    if (results.length > 0) {
      const redCarsNotSold = results.map(car => car.carname);
      const response = {
        status: 'found',
        carsNotSold: redCarsNotSold
      };
      res.json(response);
    } else {
      const response = {
        status: 'not found'
      };
      res.json(response);
    }
  });
});

app.post('/purchase', (req, res) => {
  const color = req.body.color;
  
  const query = 'UPDATE Cars SET status_ = "sold" WHERE color = ? AND status_ = "notsold"';

  connection.query(query, [color], (err, result) => {
    if (err) {
      console.error('Error executing the query: ', err);
      res.sendStatus(500); // Internal Server Error
      return;
    }

    const response = {
      success: true,
      message:'Car status updated to sold'
    };
    res.json(response);
  });
});



app.listen(8080, () => {
  console.log('Server started on port 8080');
});
