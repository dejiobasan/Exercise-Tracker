const router = require("express").Router();
let Exercise = require("../Models/Exercise.js");

router.route("/").get((req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(() => res.status(400).send('Error: Server error'));
});

router.route("/add").post((req, res) => {
    const Username = req.body.username;
    const Description = req.body.description;
    const Duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({
        Username: Username,
        Description: Description,
        Duration: Duration,
        Date: date
    });
    newExercise.save()
    .then(() => res.json("Exercise Added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise Deleted!"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.Username= req.body.username;
        exercise.Description = req.body.description;
        exercise.Duration =  Number(req.body.duration);
        exercise.Date =   Date.parse(req.body.date);
        exercise.save()
        .then(() => res.json("Exercise updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;