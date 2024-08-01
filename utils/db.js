const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URL;

const connectToMongo = async (edudash) => {
    try {
      await mongoose.connect(mongoURI, { edudash });
      console.log("MongoDB connection success");
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  };

module.exports = connectToMongo;