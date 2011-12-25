module.exports.makeSchema = function(JSONstring, callback) {
    var schemaObj = JSON.parse(JSONstring, function(key, value) {
        if(key = "type") {
            switch(value) {
                case "string":  return String;
                case "number":  return Number;
                case "date":    return Date;
                case "boolean": return Boolean;
                default:        return value;
            }
        }
        else
            return value;
    });
    callback(null, schemaObj);
};

