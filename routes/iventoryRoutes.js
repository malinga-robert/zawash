const express = require('express');
const router = express.Router();
const Expence = require('../models/Expence');


router.get('/',(req,res)=>{
    res.render('iventory')
})

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