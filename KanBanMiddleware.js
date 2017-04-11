var express = require("express");
var app = express();
var mdb = require("mongodb");
const db = require("monk")("mongodb://127.0.0.1/KanBan");
var exec = require('child_process').exec;



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function(req, res) {

});

app.post("", function(req, res) { 

});
 /* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
         
});

var port = process.env.PORT || 5000;
    app.listen(port, function() {
    console.log("Listening on " + port);  
});