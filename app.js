const express = require('express');

const app = express();

const mongoose = require('mongoose');

const Sauce = require('./models/sauce');

const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://alexiecantos:hWnqps8cD6q3e1Br@cluster0.ze0mbo8.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use('/api/auth', userRoutes);

module.exports = app;