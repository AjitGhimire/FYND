var studentService = require('./studentService');

//to register a user
var createStudentControllerFn = async (req, res) =>
{
    try{
        console.log(req.body);
        var status = await studentService.createStudentDBService(req.body);
        console.log(status);

        if (status) {
            res.send({ "status": true, "message": "User created successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating user" });
        }

    }catch(err){
        console.log(err);
    }
   
}

//to login a user
var loginstudentControllerFn = async (req, res) =>
{
    var result = null;
    try{
       
        result= await studentService.loginStudentDBService(req.body);
    

        if (result.status) {
            res.send({ "status": true, "message": "User Login Successfully"});
        } else {
            res.send({ "status": false, "message": "Error while logging" });
        }

    }catch(err){
        console.log(err);
    }
   
}

// to find the id of a register user
var loginstudentidControllerFn = async (req, res) =>
{
    var result = null;
    try{
       
        result= await studentService.loginStudentidDBService(req.body);
    

        if (result.status) {
            res.send({ "status": true, "message": "User id found successfully",result});
        } else {
            res.send({ "status": false, "message": "Error while logging" });
        }

    }catch(err){
        console.log(err);
    }
   
}

module.exports = { createStudentControllerFn,loginstudentControllerFn, loginstudentidControllerFn };
// module.exports = { createStudentControllerFn,loginstudentControllerFn};