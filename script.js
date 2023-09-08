const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
app.use(bodyParser.urlencoded({extended:false}))
app.get('/', (req, res)=>{
    res.send("Welcome Hreere")
});
app.get('/calculator', (req, res)=>{
   
    res.sendFile(__dirname +"/index.html");
});
app.post('/calculator', (req, res)=>{
    
    const name  = (req.body.first_number);
    const age = Number(req.body.second_number);
    if(age<18){
        res.send("hello "+ name+" Sorry you can not visit ");
    }
    else{
        res.send("hello "+ name +" welcome ");
    }
    
    

})

app.listen(3000,(req, res)=>{
    console.log("server  is running")
})
