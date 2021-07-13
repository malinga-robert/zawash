const express = require('express');
const router = express.Router();
const Washer = require('../models/Washer');

router.get('/',(req,res)=>{
    res.render('register',{title:"Register Car Washer",alert: req.query.alert})
})

router.post('/',async(req,res)=>{
    try{
        const washer = new Washer(req.body);
        await washer.save()
        res.redirect('register?alert=success')
    }
    catch (err) {
        res.status(400).render('register',{title: "Register Car Washer",alert:'error'})
        console.log(err)
    }
})
// router.post('/',(req,res)=>{
//     console.log(req.body)
//     const washer = new Washer(req.body);
//     washer.save()
//         .then(() => { res.send('Thank you for your registration!'); })
//         .catch((err) => {
//         console.log(err);
//         res.send('Sorry! Something went wrong.');
//         });
        
// });

    // res.send("The data has been submitted")




// router.post('/',(req,res)=>{
//     console.log(req.body)
//     const vehicle = new Vehicle(req.body);
//     vehicle.save()
//         .then(() => { res.send('Thank you for your registration!'); })
//         .catch((err) => {
//         console.log(err);
//         res.send('Sorry! Something went wrong.');
//         });
        
// });
// router.post('/',(req,res)=>{
//     console.log(req.body)
//     const expence = new Expence(req.body);
//     expence.save()
//         .then(() => { res.send('Thank you for your registration!'); })
//         .catch((err) => {
//         console.log(err);
//         res.send('Sorry! Something went wrong.');
//         });
        
// });
module.exports = router;