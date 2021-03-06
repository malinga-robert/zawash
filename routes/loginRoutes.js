const express = require('express');
const passport = require('passport');
const router = express.Router();

// login path
router.get('/', (req, res) => {
    res.render('login', { title: "Log In", alert: req.query.alert })
})

// checks username and password using passport
router.post('/', passport.authenticate('local',
    { failureRedirect: '/login?alert=error' }),
    (req, res) => {
        req.session.user = req.user
        res.redirect('/register');
})

// function for loging out from the app
router.get('/logout', (req, res) => {
 req.session.destroy(()=> {
    res.redirect('/login')
  })
})

module.exports = router;