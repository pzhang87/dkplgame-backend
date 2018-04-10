//from memory

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("hello friends")
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on " + port);
});
