const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const Users = require('./models/users.model');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'This the users endpoint!'
  });
});

app.post('/api/users', async (req, res) => {
  const user = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    user_id: req.body.user_id,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email
  });
  const savedUser = await user.save();
  console.log(savedUser)
  res.status(200).send({
    user: savedUser,
    message: 'User saved successfully!',
  });
});

app.get('/api/users', async (req, res) => {
  const users = await Users.find({});
  res.status(200).send({
    message: 'Collected all the users records succesfully!',
    users,
  });
});
app.get('/api/users/:userId', async (req, res) => {
  const query = {
    user_id: req.params.userId
  };
  console.log(query)
  const users = await Users.find({
    ...query
  });
  res.status(200).send({
    message: 'Found the user data!',
    user: users[0],
  });
});

module.exports = app;