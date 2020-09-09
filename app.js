/**
 * File: app.js
 * Desc: simple Express erver just to demo as a Docker container
 */
const express = require('express');
const PORT = process.env.port || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Node - powered by Docker');
});

app.listen(PORT, () => console.log(`Server Started and listening on ${PORT}`));
