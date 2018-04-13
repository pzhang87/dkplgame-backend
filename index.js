//from memory

const express = require('express');
const app = express();

const cardsController = require('./controllers/cards_controller')
const usersController = require('./controllers/users_controller')

app.get('/', (req, res) => {
  res.send("hello friends")
});

app.use('/', cardsController)
app.use('/', usersController)

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on " + port);
});
