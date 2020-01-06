const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');

const fetch = require('node-fetch');

const Orders = require('./models/orders.model');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'This the products endpoint!'
  });
});

app.post('/api/orders', async (req, res) => {
  const order = new Orders({
    product: req.body.product,
    user: req.body.user,
    units: req.body.units,
  });
  const savedOrder = await order.save();
  res.status(200).send({
    order: savedOrder,
    message: 'Order saved successfully!',
  });
});

app.get('/api/orders', async (req, res) => {
  const orders = await Orders.find({});
  res.status(200).send({
    message: 'Collected all the orders records succesfully!',
    orders,
  });
});

app.get('/api/orders/:orderId', async (req, res) => {
  const query = {
    order_id: req.params.orderId
  };
  const orders = await Orders.find({
    ...query
  });
  if (orders.length > 0) {
    const order = orders[0];
    //  We have a valid order here need to call cross cutting sertvices
    const userGetApi = `${config.USER_SERVICE_URI}/api/users/${order.user}`;
    const prodGetApi = `${config.PRODUCT_SERVICE_URI}/api/products/${order.product}`;

    const userPromise = fetch(userGetApi);
    const prodPromise = fetch(prodGetApi);

    const [userRes, prodRes] = await Promise.all([userPromise, prodPromise]);

    const userData = await userRes.json();
    const prodData = await prodRes.json();

    res.status(200).send({
      order,
      userData,
      prodData,
    });
  } else {
    res.status(404).send({
      message: 'Order does not exist!',
    });
  }
});

module.exports = app;