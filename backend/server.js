var express=require('express');
var bodyParser=require('body-parser');
var {mongoose} = require('../backend/db/db');
var {todoModel} = require('../backend/model/todo');
var {logmodel} = require('../backend/model/login');
var {addmodel} = require('../backend/model/add');
var {remmodel} =require('../backend/model/reminder');
var {admodel}=require('../backend/model/admin');
var {accmodel}=require('../backend/model/addaccount');
var {statusmodel}=require('../backend/model/status');
var app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept, X-Token");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
    next();
  
  });
  app.use(bodyParser.json());
  
  app.post('/logins', (req, res) => {
    console.log(req.body);
    var newdata = new logmodel(req.body);
    // console.log(req.body);
    newdata.save().then((result) => {
      res.status(200).send(result);
    }).catch((err) => {
      res.status(400).send(err);
  
    });
  });
  app.post('/add', (req, res) => {
    console.log(req.body);
    var adddata = new addmodel(req.body);
    
    adddata.save().then((result) => {
      res.status(200).send(result);
    }).catch((err) => {
      res.status(400).send(err);
    });
    });
  app.post('/search',(req,res)=>{
    console.log(req.body);
    var query=req.body['number'];
    console.log(query);
    todoModel.find().then((doc)=>{
      res.send(doc);
    }).catch((err)=>{
      res.send(err);
    });
    });
    app.post('/addremind', (req, res) => {
      // console.log(req.body);
      var reminddata = new remmodel(req.body);
      console.log(req.body);
      reminddata.save().then((result) => {
        res.status(200).send(result);
      }).catch((err) => {
        res.status(400).send(err);
      });
      });
   
app.post('/count',(req,res)=>{

	logmodel.count({},(err,result)=>{
		console.log(result);
		response = {
			status: 'success',
			data: result
		};
		res.send(response);
	});

});
app.post('/showusers',(req,res)=>{

	console.log(req.body);
	logmodel.find({},(err,result)=>{
		console.log(result);
		res.send(result);		

	});
});
app.post('/addacc', (req, res) => {
  console.log(req.body);
  var query=req.body['contact']; //new keyword is use to initialize regmodel
    console.log(query);
    logmodel.find({contact:query},(err,result)=>{
		console.log(result);
		res.send(result);		


});
  });
  app.post('/searchtask', (req,res) => {
    console.log(req.body);
    var query= req.body ['contact'];
    console.log(query);
    addmodel.find({'contact':query},(err,result) => {
      console.log(result);
      console.log("res");
        res.send(result);
    });
    });
    app.post('/searchreminder', (req,res) => {
      console.log(req.body);
      var query= req.body ['contact'];
      console.log(query);
      remmodel.find({'contact':query},(err,result) => {
        console.log(result);
        console.log("res");
          res.send(result);
      });
      });
      app.post('/edit-profile',(req,res)=>{
        var name=req.body['name'];
        var oldcontact=req.body['oldcontact'];
        var gender=req.body['gender'];
        var newcontact=req.body['newcontact'];
        var query={name:name,email:newcontact,gender:gender};
        logmodel.updateOne({email:oldcontact}, {$set: query},(err,result)=>{
          // console.log(result);
          // saveModel.updateMany({email:oldcontact}, {$set: {email:newcontact}},(err,result)=>{
          // 	console.log(result);
          // });
          res.send(result);
        }).catch((err)=>{
          res.status(400).send();
        });
      
      });
      app.post('/update-users',(req,res)=>{
        console.log("hello");
        var query=req.body['contact'];
        console.log("data"+query+"data");
        logmodel.find({contact:query},(err,result)=>{
          console.log(result);
          res.send(result);		
        });
      });
      
      app.post('/showcomplete',(req,res)=>{
        console.log(req.body);
        var query=req.body['contact'];
        console.log(query);
        statusmodel.find({contact:query},(err,result)=>{
              console.log(result);
              console.log("res");
          res.send(result);		
        });
      });
      
      
      app.delete('/delete-task',(req,res)=>{
        var task=req.query['task'];
        var contact=req.query['contact'];
        var postData=new statusmodel({task:task,contact:contact});
        console.log("hello"+postData+"hello");
        postData.save().then((result)=>
          {
              // res.status(200).send(result);
          }).catch((err)=>
          {
              // res.status(400).send(err);
          });
        addmodel.deleteOne({$and: [ { task:task  }, { contact:contact } ]},(err,result)=>{
          res.send(result);	
          console.log(result);	
        });
      
      });
    
    
  
  var port=3002;
  app.listen(port,(res)=>{
      console.log("listening on port");
  });
