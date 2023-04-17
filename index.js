const express=require('express');
const path=require('path');

const app=express()
const port=3000;

app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'routes/user.js')))

app.listen(8080,()=>{
    console.log(`Serving on http://127.0.0.1:8080`);
})