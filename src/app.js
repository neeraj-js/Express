const express = require('express');
const app = express();
const morgan = require('morgan')

const nameValidator=(req,res,next)=>{
    const name=req.params.name;
    if(name.length > 10){
        next();
    }else{
        res.send(`${name} is valid`)
    }
};

app.get('/name/:name',nameValidator)

const errorHandler = (err,req,res,next)=>{
    console.log(err);
    res.send("abcd");
    
}

const routeNo =( req,res,next)=>{
    res.send(`888888`);
    // next()
}
const routeNotExist =( req,res,next)=>{
    res.send(`pppppp`);
}
// app.get('/*',routeNotExist)

// app.use(nameValidator);
app.use(morgan('dev'));
app.use(errorHandler);
app.use(routeNo);
app.use(routeNotExist);

module.exports=app;