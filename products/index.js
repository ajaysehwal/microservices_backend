const express=require('express');
const app=express();
app.use(express.json());
app.use('/',(req,res,next)=>{
return res.status(200).json({message:"Hello form Products"});
})
app.listen(8001,()=>{
    console.log("Customer is Listening to Post 8000");
})