var mongoose = require('mongoose');
const_=require('lodash');

var status = mongoose.Schema({
    contact:{type:String},
    task:{type:String}
});


var statusmodel = mongoose.model('statusmodel',status);

module.exports={statusmodel};