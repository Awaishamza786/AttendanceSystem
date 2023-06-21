const express = require('express');
const app = express();


app.get('/', (req, res) => {
  const routerIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(`Router's IP address: ${routerIP}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});