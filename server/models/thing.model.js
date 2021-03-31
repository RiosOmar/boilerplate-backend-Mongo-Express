const mongoose = require("mongoose");

// Basic setup of the Mongoose Schema
const ThingSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:[true,"This is how we validate"],
        minlength: [3,"Setup has to be more than 2 characters"]
    },
    Description: { 
        type: String,
        required: [true, "Needs content!"]
    }
} )

// This is how we register our schema.
const Thing = mongoose.model("Thing",ThingSchema);

// Finally we export it out of the file.
module.exports = Thing;