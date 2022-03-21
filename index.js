require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./lib/server');

server.start(process.env.PORT);