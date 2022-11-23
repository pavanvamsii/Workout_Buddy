const Workout = require("../models/workoutModel");

//get all data
const getWorkouts = async(req,res) => {
    try {
        const workoutdata = await Workout.find().sort({createdAt : -1})
        res.status(200).json(workoutdata)
    } catch (err) {
        res.sendStatus(400).json({error : err.message})
    }
}
//-------------------------------------------------------------
//get a single data
const getWorkout = async(req,res) => {
    try {
        const id = req.params.id
        const workoutdata = await Workout.findById({_id : id})
        res.status(200).json(workoutdata)
    } catch (err) {
        res.sendStatus(400).json({error : err.message})
    }
}
//--------------------------------------------------------------
// //post data
const createWorkout = async(req,res) => {
    try {
        const newworkout = new Workout(req.body)
        const workout = await newworkout.save()
        res.status(201).json(workout)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}
//------------------------------------------------------------------
//update data
const editWorkout = async(req,res) => {
    try {
        const id = req.params.id
        const updatedata = await Workout.findByIdAndUpdate({_id : id},req.body,{new : true})
        res.status(200).json(updatedata)
    } catch (err) {
        res.sendStatus(400).json({error : err.message})
    }
}

//------------------------------------------------------------------
  
//delete data
const deleteworkout = async (req,res) =>{
    try {
        const id = req.params.id
        const removedata = await Workout.findByIdAndDelete({_id : id})
        res.status(200).json(removedata)
    } catch (err) {
        res.sendStatus(400).json({error : err.message})
    }
}
//---------------------------------------------------------------
module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteworkout,
};