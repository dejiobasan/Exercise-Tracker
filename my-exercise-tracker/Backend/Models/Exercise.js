const mongoose = require("mongoose");

const ExercisesSchema = new mongoose.Schema ({
    Username: { type: String, required: true },
    Description: { type: String, required: true },
    Duration: { type: Number, required: true },
    Date:{ type: Date, required: true },
}, {
    timestamps: true,
});

const Exercise = new mongoose.model("Exercise", ExercisesSchema);

module.exports = Exercise;