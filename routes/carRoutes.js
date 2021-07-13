const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');
const Washer = require('../models/Washer');




router.get('/',async(req,res)=>{
    let washerlist = await Washer.find();
    // console.log(washerlist)
    res.render('carTracking',{washers: washerlist, title:"Track Car On Arrival",alert: req.query.alert})
})
router.post('/',async(req,res)=>{
    try{
        // combine the date and time
        let data = req.body
        let datetimeArrival = Date.parse(data.date + 'T' + data.time)
        data.datetimeArrival = datetimeArrival
        
        //derive the package price and the washer fee
        let package = washPackages[data.package]
        data.packagePrice = package['packagePrice']
        data.washerFee = package['washerFee']

        const vehicle = new Vehicle(req.body);
        await vehicle.save()
        res.redirect('cartracking?alert=success')
    }
    catch (err) {
        res.status(400).render('carTracking',{title: "Register Car On Arrival",alert:'error'})
        console.log(err)
    }
})

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

module.exports = router;