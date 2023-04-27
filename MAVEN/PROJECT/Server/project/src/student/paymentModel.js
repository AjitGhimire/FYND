var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var paymentSchema= new Schema({

    name: {
        type: String,
        required: true
      },
      line1: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      district: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
      productName: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      totalamount: {
        type: Number,
        required: true
      },
      image:{
        type:String,
        required:true
      },
      regid:{
        type:String,
        required:true
      }
    });

module.exports = mongoose.model('payment',paymentSchema);