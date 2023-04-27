var paymentService = require('./paymentService');

//to store the data in a cart collection
var createpaymentControllerFn = async (req, res) =>
{
    try{
        console.log(req.body);
        var status = await paymentService.paymentDBService(req.body);
        console.log(status);

        if (status) {
            res.send({ "status": true, "message": "Payment Successful" });
        } else {
            res.send({ "status": false, "message": "Error while paying" });
        }

    }catch(err){
        console.log(err);
    }
}


var createpaymentatonceControllerFn = async (req, res) =>
{
    try{
        console.log(req.body);
        var status = await paymentService.CartpaymentatonceDBServicespecific(req.body);
        console.log(status);

        if (status) {
            res.send({ "status": true, "message": "Payment Successful" });
        } else {
            res.send({ "status": false, "message": "Error while paying" });
        }

    }catch(err){
        console.log(err);
    }
}


module.exports = {createpaymentControllerFn, createpaymentatonceControllerFn };