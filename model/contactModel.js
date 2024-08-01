const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema(
    {
        email: { type: String, required: true },
        name: { type: String, required: true },
        phone: { type: Number, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        message: { type: String, required: true },
    },
    { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;