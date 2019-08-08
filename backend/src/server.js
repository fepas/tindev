const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const port = 3333;
const server = express();
server.use(cors());
mongoose.connect(
  'mongodb+srv://tindev:tindevpwd@tindev-gkmch.mongodb.net/tindev?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

server.listen(port);

server.use(express.json());
server.use(routes);

console.log(`Server running on port ${port}`);
