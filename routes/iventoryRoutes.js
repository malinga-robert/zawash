const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');


// inventory path
router.get("/", (req, res) => {
    res.render('iventory', { title: "Register Expenses", alert: req.query.alert })
})
// posting data to the expense database
router.post("/", async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save()
       
        res.redirect('iventory?alert=success')
    }
    catch (err) {
        res.status(400).render('iventory', { title: "Register Expenses", alert: 'error' })
        console.log(err)
    }
})

module.exports = router;

