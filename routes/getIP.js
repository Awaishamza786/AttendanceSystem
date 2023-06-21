const router = require("express").Router();

var requestIp = require('request-ip');


router.get('/', (req, res) => {
  const routerIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var requestIp = req.connection.remoteAddress
  res.send(`Router's IP address: ${routerIP}`+`var ${requestIp} = requestIp.getClientIp(req);`);
});

module.exports=router