const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")



const app = express()
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/node_tut',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls 

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles",roleController.addRole)


//server 

app.listen(3000,function(){
  console.log("server started on 3000");  
})