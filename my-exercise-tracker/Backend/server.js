//jshint esversion:6

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.UserExerciseDb, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully!");
});

const ExercisesRouter = require("./Routes/Exercises");
const UserRouter = require("./Routes/Users");

app.use("/Exercises", ExercisesRouter);
app.use("/Users", UserRouter);

app.listen(port, function () {
    console.log("server started at port 5000.");
});