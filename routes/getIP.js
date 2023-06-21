const router = require("express").Router();


router.get('/', (req, res) => {
  const routerIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(`Router's IP address: ${routerIP}`);
});

module.exports=router