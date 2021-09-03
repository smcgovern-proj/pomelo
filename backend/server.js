const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(() => {
});

app.listen(port, () => {
console.log('express listening on port ' + port);
});
