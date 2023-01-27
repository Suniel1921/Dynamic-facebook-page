const express = require('express');
const path = require ('path');
const database = require('./database/conn');
const User = require ('./models/userSchema');

const app = express();
const PORT = process.env.PORT || 4000;

//setting public folder path 
const publicPath = path.join(__dirname, 'public');
//middleware
app.use(express.static(publicPath));
app.use(express.urlencoded({extended: false}))

//setting template or view engine

app.set('view engine', 'ejs');


app.get('/',(req, res)=>{
    res.render('index')
})

//post method

app.post('/index',async (req, res)=>{
    try{
        const userDetails = new User(req.body);
       await userDetails.save();
        res.status(500).send("<h4>your form is successfully submitted !</h4>")
    }
    catch(error){
        res.status(201).send(`your form is not submtted ! ${error}`);

    }
})

app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port no : ${PORT}`);
})

   