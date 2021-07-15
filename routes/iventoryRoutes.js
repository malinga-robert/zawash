const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');


router.get('/',(req,res)=>{
    res.render('iventory')
})

router.post('/',(req,res)=>{
    console.log(req.body)
    const expense = new Expense(req.body);
    expense.save()
        .then(() => { res.send('Thank you for your registration!'); })
        .catch((err) => {
        console.log(err);
        res.send('Sorry! Something went wrong.');
        });
        
});
module.exports = router;