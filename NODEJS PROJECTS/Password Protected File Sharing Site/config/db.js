import mongoose, { connect } from "mongoose";
const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGOURI)
      .then(console.log("MongooDB CONNECTED"));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB