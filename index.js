const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/router');

const app = express();

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
  next();
});
router(app);

// Server setup
const port = process.env.PORT || 3333;
const server = http.createServer(app);

server.listen(port);

console.log(`Server listening on ${port}.`);
