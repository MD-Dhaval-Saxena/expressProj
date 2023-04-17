const express=require('express');
const router=express.Router()
const users=require('../data/users');


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})
router.get('/users',(req,res)=>{
    // users.forEach(e => {
    //     console.log(e.name);
        
    // });
    res.sendFile(path.join(__dirname,'../templates/users.html'))
})

router.get('/userDetails/:slug',(req,res)=>{
    User=users.filter((e)=>{
        // return e.slug==req.params.slug
        console.log(e);
    })
    res.sendFile(path.join(__dirname,'../templates/userDetails.html'))
})

module.exports=router