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

module.exports = router;