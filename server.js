// Dependecies
const express = require("express")
const path = require('path');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const homeRoutes = require('./routes/homeRoutes');


// instantiations
const app = express()


// settings or configurations
app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


// routes
//route for index page
app.use('/', homeRoutes);
//route for signin form
app.use('/login', loginRoutes);
//route for register form
app.use('/register', registerRoutes);
//route for tracking car on arrival
app.use('/cartracking', registerRoutes);


// handle non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('This is an invalid URL')
})

// server
app.listen(3000, ()=> console.log("Listening on Port 3000!!!"));