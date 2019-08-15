const mongoose = require('mongoose');
const_= require('lodash');
var add=mongoose.Schema
({
    contact:{type:Number},
    task:{type:String},
});
var addmodel=mongoose.model('addmodel',add);
module.exports={addmodel};