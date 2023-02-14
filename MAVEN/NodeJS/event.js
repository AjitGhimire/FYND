var fs = require("fs");  //import statement
//it imports the filestream from the node modules
//fs=filestream is an inbuilt module
//module:
//collection of functionalities which are note user created bit available
//from node js
var rs=fs.createReadStream('./demofile.txt');
//var is a shortform for variable used to stroe local valeus/temporary values
//reading the outside placed demotext file
rs.on('open', function() {
console.log('the file is open');
});
