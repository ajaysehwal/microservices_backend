const express=require('express');
const app=express();
const cors=require('cors');

const proxy=require('express-http-proxy');
app.use('/customer',proxy('http://localhost:8000'));
app.use('/shopping',proxy('http://localhost:8002'));
app.use('/',proxy('http://localhost:8001'));// products


app.use(express.json());
app.use(cors());
app.listen(7000,()=>{
    console.log("Gateway is Listening to Post 7000");
})