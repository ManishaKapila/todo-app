const mongoose = require('mongoose');
const_= require('lodash');
var rem=mongoose.Schema
({
    contact:{type:Number},
    title:{type:String},
    date:{type:String},
    time:{type:String}
    
});
var remmodel=mongoose.model('remmodel',rem);
module.exports={remmodel};