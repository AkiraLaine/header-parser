var express = require("express");
var app = express();
var ip = require("ip");
var os = require("os")

app.get("/", function(req,res){
    var returnObj = {};
    returnObj.ip = req.headers['x-forwarded-for'];
    returnObj.lang = req.acceptedLanguages[0];
    returnObj.agent = req.headers["user-agent"];
    res.send(returnObj)
    res.end()
});

app.listen(process.env.PORT)