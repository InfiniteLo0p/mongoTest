const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

app.set('view engine','ejs');

mongoose.connect('mongodb+srv://TY:TYpassword@test.yswuw.mongodb.net/Test_User_Info?retryWrites=true&w=majority'); 

const userInfo = {
    name: String
    //user_name: String,
    //pass_word: String
}

const User = mongoose.model('User', userInfo);

console.log("User");

app.get('/', (req,res) => {
    //User.find({}, function(err, users){
        res.render('index', {
            //usersList: users
            content: 'Hello World'
        })
    //})
})

app.listen(4000,function() {
    console.log('server is running');
})

