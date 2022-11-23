const jwt = require("jsonwebtoken")

const createtoken = (_id)=>{
return jwt.sign({_id},process.env.JWT_TOKEN,{expiresIn : "5d"})
}

module.exports = createtoken