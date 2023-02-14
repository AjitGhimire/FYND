const http=require('http'); //importing the in built http module
var dt=require('./ownModule'); //calling one module from another/user defined module
var dy=require('./mainserver');
//dt : today's date
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the date and time are currently:"+ dt.getCurrentDate());
    // res.write("the date and time are currently:"+ dy.hello());
    //datetime is being fetched from the outside module
    //using the content type mentioned above as text/html user defined module
    res.end();//ending the writing functionality for a request response function
}).listen(8081);//mentioning which port our applicaion will run on the server