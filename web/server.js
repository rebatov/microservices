const app = require("./src/app");
const config = require('./config/')

app.listen(config.PORT, () => {
  console.log(`Web server running on ${config.PORT}`);
});