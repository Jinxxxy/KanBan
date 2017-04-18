var express = require("express");
var app = express();
var mdb = require("mongodb");
const db = require("monk")("mongodb://127.0.0.1/KanBan");
var exec = require('child_process').exec;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = require('request');
var http = require('http');
var btoa = require('btoa');

function getFindField (tableString){
    switch(tableString){
        case "Tasks":
        return "id"
        case "Users":
        return "userId"
        case "Projects":
        return "projectId"
    }
}
function getFindObject(requestObject){
    console.log(requestObject)
    var findObject = {}
    var table = requestObject["tableReference"];
    var findField = getFindField(requestObject["tableReference"]);
    var findValue = requestObject["_id"];
    findObject[findField] = findValue;
    console.log("Find Object")
    console.log(findObject)
    return findObject
}
function getUpdateObject(requestObject){
    var updateWrapper = {};
    var operation = "$set";
    var updateObject = {};
    var data = requestObject["dataObject"];
    for(var _item in data){
        if(_item !== "_id"){
            updateObject[_item] = data[_item];
        }
    }
    updateWrapper[operation] = updateObject;
    console.log("Update Object")
    console.log(updateWrapper);
    return updateWrapper;
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    next();
});

app.get("/", function(req, res) {
    console.log(req.url);
    var wholeObject = JSON.parse(decodeURI(req.url.replace("/?","")));
    if(wholeObject["requestType"] === "STARTUP"){
        var emptyStartupObject = {
            "projects":[], 
            "cards":[],
            "users":[], 
            "swimlanes":[]
        }
        db.get("Users").find({}).then((usersresults)=>{
            emptyStartupObject.users = usersresults
            
        }).then(()=>{
            db.get("Tasks").find({},{"_id":false}).then((cardresults)=>{
                emptyStartupObject.cards = cardresults
            }).then(()=>{
                db.get("SwimLanes").find({}).then((swimlaneresults)=>{
                    emptyStartupObject.swimlanes = swimlaneresults
                }).then(
                    db.get("Projects").find({}).then((projectsresults)=>{
                        emptyStartupObject.projects = projectsresults;
                        res.send(emptyStartupObject)
                    })
                )
            })
        })
        
    }

});

app.post("", function(req, res) { 
    console.log(req.url)
    var wholeObject = JSON.parse(decodeURI(req.url.replace("/?","")))
    console.log(wholeObject)
    if(wholeObject["requestType"] === "UPDATE"){
        console.log(wholeObject["tableReference"])
        var findObject = getFindObject(wholeObject);
        var updateObject = getUpdateObject(wholeObject);
        db.get(wholeObject["tableReference"]).update(
            findObject,
            updateObject 
        ).then((Resp)=>{
            res.send(Resp)
        }).catch(
            res.send("ERROR")
        )
    } else if(wholeObject["requestType"] === "INSERT"){
        db.get(wholeObject["tableReference"]).insert(
            wholeObject["dataObject"]
        ).then((res)=>{
            res.send(
                res
            )
        }).catch((err)=>{
            res.send(
                err
            )
        })
    } else if(wholeObject["requestType"] === "DELETE"){
        var findObject = getFindObject(wholeObject);
        db.get(wholeObject["tableReference"]).remove(
            findObject
        ).then(
            (resp)=>{
                res.send(true);
            }
        ).catch(
            (err)=>{
                res.send(false);
            }
        )
    }
});
 /* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
         
});
app.delete((req, res)=>{
    console.log("RAWR" + req.url)
});

var port = process.env.PORT || 5000;
    app.listen(port, function() {
// console.log("Listening on " + port); 
// db.get('Users').find({}).then((results)=>{
//     console.log(results)
// });
// var passPhrase = btoa("Not Added")
// console.log(passPhrase)
// headers = {
//     'Accept':'application/json',
//     'Content-Type':'application/json',
//     'Authorization': passPhrase
// }
// var options = {
//     url: "https://stepchangeprod.service-now.com/api/now/table/incident?sysparm_limit=10&assigned_to=Craig%20Berry",
//     method: 'GET',
//     headers: headers,
//     qs: {'key1': 'xxx', 'key2': 'yyy'}
// }
// request(    
//     options,
//     (err, resp, body)=>{
//         console.log(body)
//     }
// )

});