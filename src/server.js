const express = require('express');
const db = require('./db.js');
const app = express();
const port = 5000;
let count = 0;

app.use(express.static('public'));
app.use(() => {
  count++;
});

app.listen(port, () => {
console.log('express listening on port ' + port);
});