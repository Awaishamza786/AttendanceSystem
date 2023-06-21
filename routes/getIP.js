const router = require("express").Router();

var requestIp = require("request-ip");
var IP = require("ip");

router.get("/", (req, res) => {
  const routerIP =
    req.headers["x-forwarded-for"];
  // var requestIp = requestIp.getClientIp(req);

  const conRemoteAddress = req.connection?.remoteAddress;
  // req.socket is said to replace req.connection
  const sockRemoteAddress = req.socket?.remoteAddress;
  // some platforms use x-real-ip
  const xRealIP = req.headers["x-real-ip"];

  // most proxies use x-forwarded-for
  const xForwardedForIP = (() => {
    const xForwardedFor = req.headers["x-forwarded-for"];
    if (xForwardedFor) {
      // The x-forwarded-for header can contain a comma-separated list of
      // IP's. Further, some are comma separated with spaces, so whitespace is trimmed.
      const ips = xForwardedFor.split(",").map((ip) => ip.trim());
      return ips[0];
    }
  })();
  // prefer x-forwarded-for and fallback to the others

  res.send(
    `Router's IP address: ${routerIP}` +
      `||
    var ${requestIp} = requestIp.getClientIp(req); ||
    xForwardedForIP ${xForwardedForIP} ||
     xRealIP ${xRealIP} ||
      sockRemoteAddress ${sockRemoteAddress} ||
       conRemoteAddress  ${conRemoteAddress}||
       conRemoteAddress  ${IP.address()}||`
  );
});

module.exports = router;
