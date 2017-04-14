// Start server using "heroku local"

const path = require('path');
const express = require('express');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.route('/*').get(function (req, res) {
  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.listen(process.env.PORT || 3000);
