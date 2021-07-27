const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');
const Washer = require('../models/Washer');

washPackages = {
    smallcars: {washerFee:3000,  packagePrice:10000},
    medium:   { washerFee:4000,  packagePrice:15000},
    fullwash: { washerFee:5000,  packagePrice:20000},
    bodaboda: { washerFee:1500,  packagePrice:5000},
    engine:   { washerFee:2000,  packagePrice:10000}
}


router.get('/',async(req,res)=>{
    let washerlist = await Washer.find();
    // console.log(washerlist)
    res.render('carTracking',{washers: washerlist, title:"Track Car On Arrival",alert: req.query.alert})
})
router.post('/',async(req,res)=>{
    try{
        // combine the date and time
        let data = req.body
        let datetimeArrival = Date.parse(data.doa + 'T' + data.toa)
        data.datetimeArrival = datetimeArrival
        
        //derive the package price and the washer fee
        let package = washPackages[data.package]
        data.packagePrice = package['packagePrice']
        data.washerFee = package['washerFee']
        
        // saving captured car data
        const vehicle = new Vehicle(req.body);
        await vehicle.save()
        res.redirect('cartracking?alert=success')
    }
    catch (err) {
        res.status(400).render('carTracking',{title: "Register Car On Arrival",alert:'error'})
        console.log(err)
    }
})
module.exports = router;


