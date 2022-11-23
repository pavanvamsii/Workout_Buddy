const jwt = require("jsonwebtoken")
const User = require('../models/usermodel')


const authUser = async (req,res,next)=>{
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).send({error : "Auth token required"})
    }

    const token = authorization.split(" ")[1]
    try {
        const {_id} = jwt.verify(token,process.env.JWT_TOKEN)
        req.user = await User.findOne({_id}).select("_id");
        next()
    } catch (err) {
        res.send({error : "request is not authorized!"})
    }
}

module.exports = authUser