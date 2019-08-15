const mongoose = require('mongoose');
const_= require('lodash');
var log=mongoose.Schema
({
    
    name:{type:String},
    password:{type:String},
    contact:{type:Number},
    gender:{type:String},
});
var logmodel=mongoose.model('logmodel',log);
module.exports={logmodel};