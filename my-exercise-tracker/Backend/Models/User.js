const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema ({
    Username: {type: String, required: true, unique: true, trim: true, minlength: 5},
}, {
    timestamps: true,
});

const User = new mongoose.model("User", UsersSchema);

module.exports = User;