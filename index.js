//from memory

const express = require('express');
const app = express();

const cardsController = require('./controllers/cards_controller')
const bannersController = require('./controllers/banners_controller')
const bannerCardsController = require('./controllers/bannercards_controller')
const usersController = require('./controllers/users_controller')
const userController = require('./controllers/user_controller')

app.get('/', (req, res) => {
  res.send("hello friends")
});

app.use('/', bannersController)
app.use('/', bannerCardsController)
app.use('/', cardsController)
app.use('/', usersController)
app.use('/', userController)

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on " + port);
});
