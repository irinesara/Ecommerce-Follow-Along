const express=require('express');
const connectDB = require('./src/Database/db');
const userrouter = require('./src/Controller/user');
const { get } = require('mongoose');
const productrouter = require('./src/Controller/Product');
const cors = require('cors');

const app=express();

app.use(express.json());
app.use(cors());

require('dotenv').config({
    path:'./src/config/.env'
});

const PORT=process.env.port || 5000;
const url=process.env.db_url;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use('/order', orderrouter);
app.use('/auth', userrouter);
app.listen(PORT,async()=>{

    try {
        await connectDB(url);
        console.log(`Server is running on port ${PORT}`);
    }
    catch(err){
        console.log(err);
    }
});
app.use('/auth', userrouter)
app.use('/product', productrouter);

app.get('/', (req,res)=>{
    res.send('Product router');
});