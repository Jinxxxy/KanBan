var express = require("express");
var app = express();
var mdb = require("mongodb");
const db = require("monk")("mongodb://127.0.0.1/KanBan");
var exec = require('child_process').exec;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var http = require('http')
var btoa = require('btoa');



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function(req, res) {
    console.log(req.url);
    var wholeObject = JSON.parse(decodeURI(req.url.replace("/?","")))
    console.log(wholeObject)
    if(wholeObject["requestType"] === "STARTUP"){
        var emptyStartupObject = {
            "projects":[], 
            "cards":[],
            "users":[], 
            "swimlanes":[]
        }
        db.get("Users").find({}).then((usersresults)=>{
            console.log(usersresults)
            emptyStartupObject.users = usersresults
            
        }).then(()=>{
            db.get("Tasks").find({}).then((cardresults)=>{
                console.log(cardresults);
                emptyStartupObject.cards = cardresults
            }).then(()=>{
                db.get("SwimLanes").find({}).then((swimlaneresults)=>{
                    console.log(swimlaneresults)
                    emptyStartupObject.swimlanes = swimlaneresults
                }).then(
                    db.get("Projects").find({}).then((projectsresults)=>{
                        console.log(projectsresults);
                        emptyStartupObject.projects = projectsresults;
                        res.send(emptyStartupObject)
                    })
                )
            })
        })
        
    }

});

app.post("", function(req, res) { 

});
 /* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
         
});

var port = process.env.PORT || 5000;
    app.listen(port, function() {
    console.log("Listening on " + port); 
    db.get('Users').find({}).then((results)=>{
        console.log(results)
    })    
var requestBody = ""; 



var client=new XMLHttpRequest();
client.open("get","https://stepchangeprod.service-now.com/api/now/table/incident?sysparm_limit=10&assigned_to=Craig%20Berry");

client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic '+btoa('craigb'+':'+'Lufclufc@2109876'));

client.onreadystatechange = function() { 
console.log(this.status)
console.log(this.response)
}; 
client.send(requestBody);
});