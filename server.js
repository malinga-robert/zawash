// Dependecies
const express = require("express")
const path = require('path');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const homeRoutes = require('./routes/homeRoutes');
const iventoryRoutes = require('./routes/iventoryRoutes');
const carRoutes = require('./routes/carRoutes');
require('dotenv').config();
const mongoose = require('mongoose');


// instantiations
const app = express()

// mongodb connection
//DATABASE1=mongodb://localhost:27017/corhot-0008
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
  

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
//route for tracking car on arrival
app.use('/cartracking', carRoutes);
//route for register form
app.use('/register', registerRoutes);
//route for iventory form
app.use('/iventory', iventoryRoutes);



// handle non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('This is an invalid URL')
})

// server
app.listen(3000, ()=> console.log("Listening on Port 3000!!!"));