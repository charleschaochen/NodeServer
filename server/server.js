/**
 * Created by ccn1069 on 2015/5/4.
 */

var serverConfig = require("../config/serverConfig.js");
var http = require("http");
var url = require("url");
var fs = require("fs");

// Create a server and start
var server = http.createServer(function (request, response) {
    var oUrl = url.parse(request.url);
    var sPath = oUrl.pathname;
    var sRoot = serverConfig.config.web_root;
    // If request the home directory, redirect to welcome page
    if (sPath === "/" || /^\/*\/$/.test(sPath)) {
        sPath = serverConfig.config.welcome_page;
    }

    // Read server resource content and output to browser
    fs.readFile(sRoot + sPath, "utf-8", function (err, data) {
        if(err) {
            console.log(err);
            response.writeHead(404);
            // Redirect to 404 page
            fs.readFile(sRoot + serverConfig.config.error_page['404'], "utf-8", function(err,data){
                response.end(data);
            });
            return;
        }

        response.end(data);
    })

});

server.listen(serverConfig.config.port);