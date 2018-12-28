let MONGO_URI = 'mongodb://localhost:27018/microservices';
if (process.env.MONGO_DB_URI) {
  MONGO_URI = process.env.MONGO_DB_URI;
}
const PORT = 9000;

module.exports = {
  MONGO_URI,
  PORT,
}