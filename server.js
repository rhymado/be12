require ('dotenv/config');
const express = require ('express');
const logger = require ('morgan');
const bodyParser = require ('body-parser');

const Router = require ('./src/Routes/index');

const server = express ();
const port = 3000;
const nodeEnv = 'Development';

server.listen (port, () => {
  console.log (`Server is running in port ${port} in ${nodeEnv} Mode`);
});

server.use (logger ('dev'));
server.use (bodyParser.json ());
server.use (bodyParser.urlencoded ({extended: false}));

server.use ('/', Router);

module.exports = server;
