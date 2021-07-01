// Dependecies
const express = require("express")

// instantiations
const app = express()

// settings or configurations
app.set('view engine', 'pug');
app.set('views', './views');

// middle ware
app.use(express.urlencoded({extended: true}));

// routes
app.get('/register',(req,res)=>{
    res.render('register_washer',{title:"Register Car Washer"})
})
app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send("The data has been submitted")
})


// handle non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('This is an invalid URL')
})

// server
app.listen(3000, ()=> console.log("Listening on Port 3000!!!"));