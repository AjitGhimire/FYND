var productModel = require("./productModel.js");

//to store data in a cart collection
module.exports.CartDBService = (productDetails) => {
  return new Promise(function myFn(resolve, reject) {
    var productModelData = new productModel();

    productModelData.name = productDetails.name;
    productModelData.price = productDetails.price;
    productModelData.quantity = productDetails.quantity;
    productModelData.image = productDetails.image;
    productModelData.userid = productDetails.userid;

    productModelData.save(function resultHandle(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

// to fetch the all the products in the cart collection
// module.exports.CartfetchDBService = (productDetails) => {
//   return new Promise(function myFn(resolve, reject) {
//     productModel.findOne({}, (err, data) => {
//       if (err) {
//         reject({ status: false, msg: "Invalid Data" });
//       } else {
//         console.log(data);
//         resolve({ status: true, msg: "product fetched successfully", data });
//       }
//     });
// });
// };


//to fetch the  product from the cart collecton of specific users if the usermail match with the product userid
module.exports.CartfetchDBServicespecific = (productDetails) => {
    return new Promise(function myFn(resolve, reject) {
        productModel.find({userid: productDetails.userid },function getresult(errorvalue, data) {
            if (errorvalue) {
              reject({ status: false, msg: "Invalid Data" });
            } else {
              if (data != undefined && data != null) {
                console.log(data);
                resolve({
                  status: true,
                  msg: "product fetched successfully",
                  data,
                });
              } else {
                console.log("user not found");
              }
            }
          }
        );
      });
    };


//to delete the product
module.exports.CartpriceDBServicespecific = (productDetails) => {
  return new Promise(function myFn(resolve, reject) {
      productModel.deleteOne({_id: productDetails._id },function getresult(errorvalue, data) {
          if (errorvalue) {
            reject({ status: false, msg: "Invalid Data" });
          } else {
            if (data != undefined && data != null) {
              resolve({
                status: true,
                msg: "delete data successfully",
                data,
              });
            } else {
              console.log("user not found");
            }
          }
        }
      );
    });
  };

