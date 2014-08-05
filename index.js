/**
 * @overview
 *
 * @author
 * @version 2014/08/06
 */

var http = require("http");
var port = 3000;
var host = "0.0.0.0";

http.createServer(function (req, res) {

    res.end("hello world");

}).listen(port, host);

console.log("server : " + host + ":" + port);
