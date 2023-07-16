const mongoose = require("mongoose");
// mongoose.set("strictQuery", false)
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.pwiw67n.mongodb.net/RecipeApp?retryWrites=true&w=majority"
    );
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
