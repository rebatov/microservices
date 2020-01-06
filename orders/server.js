const app = require('./src/app');
const {
  MONGO_URI,
  PORT
} = require('./src/config');
const mongoose = require('mongoose');
mongoose.connect(MONGO_URI);

app.listen(PORT, () => {
  console.log(` Orders Server is running on: ${PORT}`);
});