const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be atleast 3 characters"]
    },

    petType: {
        type: String,
        required: [true, "Pet Type is required"],
        minlength: [3, "Pet type must be atleast 3 characters"]

    },

    petDescription: {
        type: String,
        required: [true, "Description of pet is required"],
        minlength: [3, "Pet description must be atleast 3 characters"]
    },

    skill1: {
        type: String
    },
    skill2: {
        type: String
    },

    skill3: {
        type: String
    }

}, { timestamps: true });


const Pet = mongoose.model("Pet", PetSchema)
module.exports = Pet;