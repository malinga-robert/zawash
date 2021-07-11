const express = require('express');
const router = express.Router();
const Washer = require('../models/Washer');
const Vehicle = require('../models/Vehicle');
const Expence = require('../models/Expence');

router.get('/',(req,res)=>{
    res.render('register',{title:"Register Car Washer"})
})
router.get('/iventory',(req,res)=>{
    res.render('iventory')
})
router.get('/cartracking',(req,res)=>{
    res.render('carTracking',{title:"Track Car On Arrival"})
})
router.post('/',(req,res)=>{
    console.log(req.body)
    const washer = new Washer(req.body);
    washer.save()
        .then(() => { res.send('Thank you for your registration!'); })
        .catch((err) => {
        console.log(err);
        res.send('Sorry! Something went wrong.');
        });

    // res.send("The data has been submitted")
})
router.post('/',(req,res)=>{
    console.log(req.body)
    const vehicle = new Vehicle(req.body);
    vehicle.save()
        .then(() => { res.send('Thank you for your registration!'); })
        .catch((err) => {
        console.log(err);
        res.send('Sorry! Something went wrong.');
        });
        
});
router.post('/',(req,res)=>{
    console.log(req.body)
    const expence = new Expence(req.body);
    expence.save()
        .then(() => { res.send('Thank you for your registration!'); })
        .catch((err) => {
        console.log(err);
        res.send('Sorry! Something went wrong.');
        });
        
});
module.exports = router;