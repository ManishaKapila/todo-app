const mongoose = require('mongoose');
const_= require('lodash');
var admin=mongoose.Schema
({
    contact:{type:Number},
  
});
var admodel=mongoose.model('admodel',admin);
module.exports={admodel};
