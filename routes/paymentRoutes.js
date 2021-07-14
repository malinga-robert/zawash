const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');
const moment = require('moment');


router.get('/', async (req, res) => {
    try {
        // use moment to get selected date and default date
        let selectedDate = moment().format('YYYY-MM-DD')
        if (req.query.searchdate)
            selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')

        // based on selected date , query to get the count of vehicles per washer,
        //  &  payout per washer.
        let washedVehicles = await Vehicle.aggregate(
            [ {$match: { date: new Date(selectedDate) }},
            { $group: { _id: '$washer', count: { $sum: 1 }, totalPayout: { $sum: '$washerFee' } } },
            { $lookup: { from: 'washers', localField: '_id', foreignField: '_id', as: "details" } }
            ])
        // get the total payout for all the washers based on the selected date
        let totalPayoutPerDay = await Vehicle.aggregate([
                { $match: { date: new Date(selectedDate) } },
                { $group: { _id: '$date', totalPayoutPerDay: { $sum: '$washerFee' } } }
            ])
        // pass the all the relevant data as you render the payout report
        res.render("payment", { washers: washedVehicles, 
            title: "List of Car Washers", defaultDate: selectedDate ,
            sumPayout:totalPayoutPerDay[0]})
    }
    catch (err) {
        console.log(err)
        res.send('Failed to retrive payout details');
    }
})
module.exports = router;