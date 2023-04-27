var productService = require('./productService');

//to store the data in a cart collection
var createCartControllerFn = async (req, res) =>
{
    try{
        console.log(req.body);
        var status = await productService.CartDBService(req.body);
        console.log(status);

        if (status) {
            res.send({ "status": true, "message": "Added to successfully" });
        } else {
            res.send({ "status": false, "message": "Error adding to cart" });
        }

    }catch(err){
        console.log(err);
    }
}


//to fetch all the products
// var fetchCartControllerFn = async (req, res) =>
// {
//     var result = null;
//     try{
       
//         result= await productService.CartfetchDBService(req.body);
    
//         if (result.status) {

//             res.send({ "status": true, "message": "fetch cart successfully",result});
//         } else {
//             res.send({ "status": false, "message": "Error while logging" });
//         }

//     }catch(err){
//         console.log(err);
//     }
// }


//to fetch the specific product
var fetchCartControllerFnspecific = async (req, res) =>
{
    var result = null;
    try{
       
        result= await productService.CartfetchDBServicespecific(req.body);
    
        if (result.status) {

            res.send({ "status": true, "message": "fetch cart successfully",result});
        } else {
            res.send({ "status": false, "message": "Error while logging" });
        }

    }catch(err){
        console.log(err);
    }
}

// to delete item
var priceCartControllerFnspecific = async (req, res) =>
{
    var result = null;
    try{
       
        result= await productService.CartpriceDBServicespecific(req.body);
    
        if (result.status) {

            res.send({ "status": true, "message": "delete product successfully",result});
        } else {
            res.send({ "status": false, "message": "Error while logging" });
        }

    }catch(err){
        console.log(err);
    }
}

//exporting to the routes
module.exports = { createCartControllerFn, fetchCartControllerFnspecific, priceCartControllerFnspecific};