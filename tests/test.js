var JMS = require("json-mongoose-schemadef");
var mongoose = require("mongoose");
var fs = require('fs');

var file = __dirname + '/blogposts.json';

fs.readFile(file, 'utf8', function(err, data) {
    if(err) {
        console.log(err.message);
        return;
    }
    JMS.makeSchema(JSON.stringify(JSON.parse(data)), function(err, schemaObj) {
        if(err) {
            console.log(err.message);
        }
        else {
            console.log(schemaObj);
        }
    });
});
