const express = require("express");
const router = express.Router();
const authUser = require("../middleware/usermiddleware")

const {
    getWorkouts,
    getWorkout,
    createWorkout,
    editWorkout,
    deleteworkout,
} = require("../controllers/workoutcontrollers");

router.use(authUser)

//get entire data
router.get("/", getWorkouts);

//get a single data
router.get("/:id", getWorkout);

//post data
router.post("/", createWorkout);

//update data
router.patch("/:id", editWorkout);

//Delete data
router.delete("/:id", deleteworkout);
module.exports = router;
