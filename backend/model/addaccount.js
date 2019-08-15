const mongoose = require('mongoose');
const_= require('lodash');
var account=mongoose.Schema
({
    contact:{type:Number},
  
});
var accmodel=mongoose.model('accmodel',account);
module.exports={accmodel};
