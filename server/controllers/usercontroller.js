const user = require("../models/usermodel")
const createtoken = require("../utils/token")

//login 
const login = async(req,res)=>{
    const {email,password} = req.body
    try {
        const User = await user.login(email,password)

        //token
        const Token = createtoken(User._id)

        res.status(200).json({email,password,Token})
    } catch (err) {
        res.status(200).send({error : err.message})
    }}





//signup
const signup = async(req,res)=>{
    const {_id,email,password} = req.body
    try {
        const User = await user.signup(email,password)

        //token
        const Token = createtoken(_id)

        res.status(200).json({email,password,Token})
    } catch (err) {
        res.status(200).send({error : err.message})
    }
}
module.exports = {
    login,signup
}