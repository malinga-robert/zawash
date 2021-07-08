const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('register',{title:"Register Car Washer"})
})
router.get('/cartracking',(req,res)=>{
    res.render('carTracking',{title:"Track Car On Arrival"})
})
router.post('/',(req,res)=>{
    console.log(req.body)
    res.send("The data has been submitted")
})

module.exports = router;