const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
// conecta ao banco 
mongoose.connect('mongodb+srv://Henzo:992563@nodestore.wuxrx.mongodb.net/nodestore?retryWrites=true&w=majority');
//Carrega os models
 const Product = require('./models/product.js');

// carrega as rotas 
const indexroute = require('./routes/index-route');
const products = require('./routes/products-routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexroute);
app.use('/products', products);

module.exports = app;
