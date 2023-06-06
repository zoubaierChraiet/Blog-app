import mongoose from "mongoose";

export const connect = async () =>
  mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log("mongoDb connected successfully");
  });
