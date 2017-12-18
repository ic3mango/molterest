const mongoose = require('mongoose');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
mongoose.set('debug', true);

// import our models and passport setup
require('./models/User');
require('./models/Pin');

const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serving listening on port ${PORT}`);
});
