const router = require("express").Router();
let User = require("../Models/User.js");

router.route("/").get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(() => res.status(400).send('Error: Server error'));
});

router.route("/add").post((req, res) => {
    const Username = req.body.username;
    const newUser = new User({Username: Username});
    newUser.save()
    .then(()=> res.json("User Added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;