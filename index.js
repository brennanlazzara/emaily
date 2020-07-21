const express = require('express');
const moongose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

moongose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
