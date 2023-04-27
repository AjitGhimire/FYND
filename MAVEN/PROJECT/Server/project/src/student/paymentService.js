var paymentModel = require("./paymentModel.js");

//to store data in a cart collection
module.exports.paymentDBService = (paymentDetails) => {
  return new Promise(function myFn(resolve, reject) {
    var paymentModelData = new paymentModel();

    paymentModelData.name = paymentDetails.name;
    paymentModelData.line1 = paymentDetails.line1;
    paymentModelData.city = paymentDetails.city;
    paymentModelData.country = paymentDetails.country;
    paymentModelData.district = paymentDetails.district;
    paymentModelData.date = paymentDetails.date;
    paymentModelData.productName = paymentDetails.productName;
    paymentModelData.quantity = paymentDetails.quantity;
    paymentModelData.totalamount = paymentDetails.totalamount;
    paymentModelData.image = paymentDetails.image;
    paymentModelData.regid = paymentDetails.regid;

    paymentModelData.save(function resultHandle(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};


//to store data at once

//to delete the product
module.exports.CartpaymentatonceDBServicespecific = (paymentDetails) => {

  let payments = [];
for(let i = 0; i < paymentDetails.productName.length; i++){
  let payment = {
    name: paymentDetails.name,
    line1: paymentDetails.line1,
    city: paymentDetails.city,
    country: paymentDetails.country,
    district: paymentDetails.district,
    date: paymentDetails.date,
    productName: paymentDetails.productName[i],
    quantity: paymentDetails.quantity[i],
    totalamount: paymentDetails.totalamount,
    image: paymentDetails.image[i],
    regid: paymentDetails.regid
  };
  payments.push(payment);
}

  return new Promise(function myFn(resolve, reject) {
    paymentModel.insertMany(payments,function getresult(errorvalue, data) {
          if (errorvalue) {
            reject({ status: false, msg: "Invalid Data" });
          } else {
            if (data != undefined && data != null) {
              resolve({
                status: true,
                msg: "added data successfully",
                data,
              });
            } else {
              console.log("error");
            }
          }
        }
      );
    });
  };
