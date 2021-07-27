const express = require('express');
const router = express.Router();
const Washer = require('../models/Washer');
const Manager = require('../models/Manager')


//  washer path to access register form
router.get('/',(req,res)=>{
    res.render('register',{title:"Register Car Washer",alert: req.query.alert})
})
// posting washer data to the database using model file of washer
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
// getting manager data from form
router.get('/manager', (req, res) => {
    res.render('manager_signup', {
        title: "Register Manager",
        alert: req.query.alert
    })
})
// posting manager data to the database using manager model file
router.post("/manager", async (req, res) => {
    
    const manager = new Manager(req.body);
    await Manager.register(manager, req.body.password, (err) => {
        
        if (err) {
            res.status(400).render('manager_signup', { title: "Register Manager", alert: 'error' })
            console.log(err)
        } else {
            res.redirect('manager?alert=success')
        }
    })
})

// function to delete washer from washer_details reports
router.post('/delete-washer', async (req, res) => {
    try {
        await Washer.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
  })

module.exports = router;  

