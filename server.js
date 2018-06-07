const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Root route!");
});

app.get('/hello/:firstname/:lastname', (req, res) => {
  console.log(req.params);
  res.send("Hello " + req.params.firstname + " " + req.params.lastname);
});

app.get('/hello/:firstname', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send("Hello " + req.query.title + " " + req.params.firstname);
});



app.listen(PORT, console.log('listening on port', PORT));
