var mongoose=require('mongoose');
const_=require('lodash');
var todo=mongoose.Schema({
    contact:{type:Number},
    password:{type:String}
});
var todoModel=mongoose.model('todoModel',todo);
module.exports={todoModel};