const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const expressjwt=require('express-jwt');
const app=require('express');

app.use(bodyParser.json());

app.post('/api/auth',function(req,res){
    var token;
    const body=req.body;
    if(body.username=='admin' && body.password=='password')
    {
        token=jwt.sign({username:body.username},'todo-app-secret-key',{expiresIn:'2h'}); 
    }
    res.send({token});
});
