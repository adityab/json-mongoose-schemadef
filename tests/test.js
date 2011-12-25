var JMS = require("json-mongoose-schemadef");
var mongoose = require("mongoose");
var fs = require('fs');

var file = __dirname + '/geo_coords.json';

fs.readFile(file, 'utf8', function(err, data) {
    if(err) {
        console.log("Error: " + err);
        return;
    }
    console.log(JSON.stringify(JSON.parse(data)));
    JMS.makeSchema(JSON.stringify(JSON.parse(data)), function(err, schemaObj) {
        if(err) {
            console.log("Error: " + err);
        }
        else {
            console.log(schemaObj);
        }
    });
});
