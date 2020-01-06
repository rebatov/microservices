let MONGO_URI = 'mongodb://localhost:27018/microservices';
if (process.env.MONGO_DB_URI) {
  MONGO_URI = process.env.MONGO_DB_URI;
}
const PORT = 9000;
// const USER_SERVICE_URI = 'http://localhost:8000';
// const PRODUCT_SERVICE_URI = 'http://localhost:8001';
const USER_SERVICE_URI = 'http://users:9000';
const PRODUCT_SERVICE_URI = 'http://products:9000';

module.exports = {
  MONGO_URI,
  PORT,
  USER_SERVICE_URI,
  PRODUCT_SERVICE_URI,
}