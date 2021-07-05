// Dependecies
const express = require("express")
const path = require('path');
const registerRoutes = require('./routes/registerRoutes');
const signinRoutes = require('./routes/singninRoutes');


// instantiations
const app = express()


// settings or configurations
app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


// routes
//route for signin form
app.use('/login', signinRoutes);
//route for register form
app.use('/register', registerRoutes);


// handle non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('This is an invalid URL')
})

// server
app.listen(3000, ()=> console.log("Listening on Port 3000!!!"));