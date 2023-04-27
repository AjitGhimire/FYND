var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var dataSchema= new Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('carts',dataSchema);