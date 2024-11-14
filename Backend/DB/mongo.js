const mongoose = require("mongoose");

const connect = async () => {
  try {
    const connectionString = process.env.DB_CONNECTION_STRING || "";

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected successfully!");
  } catch (error) {
    console.error("Database disconnection error:", error);
  }
};

module.exports = { connect, disconnect };
