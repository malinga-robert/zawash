const express = require('express');
const mongoose = require('mongoose');
const Vehicle = require('../models/Vehicle')
const Washer = require('../models/Washer')
const Expence = require('../models/Expence')
const moment = require('moment');
const router = express.Router();

router.get('report', async (req, res) => {
    try {
        let selectedDate = moment().format('YYYY-MM-DD')
        if (req.query.searchdate)
            selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')

        // query for returning all expenses on a day
        let expenseDetails = await Expense.find({ currentdate: selectedDate })

        // query for total expense on a day
        let totalExpense = await Expense.aggregate([
            { $match: { currentdate: new Date(selectedDate) } },
            { $group: { _id: '$currentdate', totalExpense: { $sum: '$amount' } } }
        ])

        res.render("expenses", {
            expenses: expenseDetails, total: totalExpense[0],
            title: "Expenses", defaultDate: selectedDate
        })
    } catch (err) {
        console.log(err)
        res.send('Failed to retrive Expense details');
    }
})



module.exports = router;