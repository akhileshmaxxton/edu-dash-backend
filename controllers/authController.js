const Contact = require("../model/contactModel");

const saveContactDetails = async (req, res) => {
    const { name, email, message, phone, state, country } = req.body;
    // console.log(req.body);
    // if (!name || !email || !message || !number || !state || !country) {
    //     return res.status(400).json({ error: "Please fill all fields" });
    // }
    try {
        const contact = new Contact({ name, email, phone, state, country, message  });
        await contact.save();
        res.status(200).json({ message: "Contact details saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    saveContactDetails
  };