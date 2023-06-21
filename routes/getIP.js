const router = require("express").Router();

var requestIp = require('request-ip');


router.get('/', (req, res) => {
  const routerIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var requestIp = require('request-ip');
  res.send(`Router's IP address: ${routerIP}`+`var ${requestIp} = require('request-ip');`);
});

module.exports=router