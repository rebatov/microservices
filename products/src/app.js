const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Products = require('./models/products.model');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'This the products endpoint!'
  });
});

app.post('/api/products', async (req, res) => {
  const product = new Products({
    name: req.body.name,
    category: req.body.category,
  });
  const savedProduct = await product.save();
  res.status(200).send({
    product: savedProduct,
    message: 'Product saved successfully!',
  });
});

app.get('/api/products', async (req, res) => {
  const products = await Products.find({});
  res.status(200).send({
    message: 'Collected all the products records succesfully!',
    products,
  });
});

app.get('/api/products/:name', async (req, res) => {
  const query = {
    name: req.params.name
  };
  const products = await Products.find({
    ...query
  });
  res.status(200).send({
    message: 'Found the productsData',
    product: products[0],
  });
});

module.exports = app;