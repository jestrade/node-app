const express = require('express');
require('dotenv').config();
const app = express();

app.get('/api', (req, res) => {
  res.status(200).json('Hello from api');
});

const server = app.listen(process.env.HTTP_PORT, () => {
  console.log(`server is running in port ${server.address().port}...`);
});
