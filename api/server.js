const express = require('express');

const server = express();

server.use(express.json());

server.use('/', (req, res) => {
  res.status(200).json({ message: "API is Working" })
})

server.use((err, req, res, next) => {
  res.status(500).json({ message: "Something went Wrong" })
})

module.exports = server;