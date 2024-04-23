const express = require('express');
const connectdb= require('./config/userconfig');
const app =express();
const personSchema = require('./model/personmodel');

const personRouter = require('./routes/personRoutes');

require('dotenv').config();

const port=process.env.PORT;

connectdb();
app.use (express.json())
app.use('/api', personRouter)









app.listen(port,(err)=>{
    if (err){
        console.error(err)
    }
    console.log('server run with success'+ port);
    }
    )