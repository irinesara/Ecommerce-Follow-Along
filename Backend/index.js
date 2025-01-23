const express=require('express');
const {connectDB}= require('./src/Database/db');
const app=express();

require('dotenv').config({
    path:'./src/Config/.env'
});
const PORT=process.env.PORT; 
const url=process.env.db_url;

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(PORT,async()=>{

    try{
        await connectDB(url);
        console.log(`Server is running on port ${PORT}`);
    }
    catch(err){
        console.log(err);
    }
});