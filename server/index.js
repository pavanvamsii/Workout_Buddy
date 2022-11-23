require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")

const port = process.env.PORT || 4000

//db
require("./db/connection")


//require routes
const workoutroutes = require("./routes/workoutRoutes")
const userrout = require("./routes/userroutes")

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use("/api/workout",workoutroutes)
app.use("/api/user",userrout)

app.listen(port,()=>{
    console.log(`your server is running on port ${port}...`)
})