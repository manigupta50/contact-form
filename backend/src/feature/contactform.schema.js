import mongoose from "mongoose";

export const contactFormSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String
    },
    phone: {
        type: Number
    },
    about: {
        type: String
    }
});