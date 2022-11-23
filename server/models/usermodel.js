const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const userschema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

//Static signup function
userschema.statics.signup = async(email,password)=>{
    const exists = await user.findOne({email})
    if(exists){
        throw Error("Email already exists!")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const User = await user.create({email,password:hash})
    return User
}


//static login function
userschema.statics.login = async(email,password)=>{
    const User = await user.findOne({email})
    if(!User){
        throw Error("incorrect email")
    }
    const match = await bcrypt.compare(password,User.password)
    if(!match){
        throw Error("Incorrect Password!")
    }

    return User;
    
}

const user = new mongoose.model("User",userschema)

module.exports = user;