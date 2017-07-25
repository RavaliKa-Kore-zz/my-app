var express= require('express');
var app=express();
var fs=require('fs');
app.get('/getusers', function(req,res){

fs.readFile(__dirname+ "/" +"users.json",'utf8',function(err,data){
console.log(data);
res.end(data);
});
})
app.listen(8080);




