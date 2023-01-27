const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type: String,
        require : true,
    },
    
    password: {
        type: String,
        require : true,
    },

    // date: {
    //     Date,
    //     default: Date.now,

    // }
})

//creating models

const User = mongoose.model('User', userSchema);
module.exports = User;