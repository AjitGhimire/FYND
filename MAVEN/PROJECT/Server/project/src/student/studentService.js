var studentModel = require('./studentModel.js');
var key = '123456789trytrytry';
var encryptor = require('simple-encryptor')(key);

//to store the data in a register collection (user register data)
module.exports.createStudentDBService = (userDetails) => {

    return new Promise(function myFn(resolve, reject) {
        var userModelData = new studentModel();

        userModelData.firstname = userDetails.firstname;
        userModelData.lastname = userDetails.lastname;
        userModelData.email = userDetails.email;
        userModelData.password = userDetails.password;
        var encrypted = encryptor.encrypt(userDetails.password);
        userModelData.password = encrypted;

        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }

        });

    });
}

//to check the email of register user
module.exports.loginStudentDBService = (userDetails) => {

    return new Promise(function myFn(resolve, reject) {

        studentModel.findOne({ email: userDetails.email }, function getresult(errorvalue, result) {
            if (errorvalue) {
                reject({ status: false, msg: "Invalid Data" });
            } else {
                if (result != undefined && result != null) {
                    var decrypted = encryptor.decrypt(result.password);

                    if (decrypted == userDetails.password) {
                        resolve({ status: true, msg: "employee valid successfully" });

                    } else {
                        reject({ status: false, msg: "Invalid employee details" });
                    }
                }
            }
        });
    });
}

//to find the specific item or a registerd user
module.exports.loginStudentidDBService = (userDetails) => {

    return new Promise(function myFn(resolve, reject) {

        studentModel.findOne({email: userDetails.email}, function getresult(errorvalue, data) {
            if (errorvalue) {
                reject({ status: false, msg: "Invalid Data" });
            } else {
                if(data != undefined && data != null){
                    console.log(data._id);
                    resolve({ status: true, msg: "Id fetched successfully",data });
                }else{
                    console.log("user not found")
                }
            }
        });
    });
}
