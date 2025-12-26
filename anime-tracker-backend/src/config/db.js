import mongoose from "mongoose";

const MongoDBUrl = process.env.MongoDBUrl;

const serverConnect = async () => {
  try {
    await mongoose.connect(MongoDBUrl);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database failed to connect", error.message);
    process.exit(1);
  }
};

export default serverConnect;
