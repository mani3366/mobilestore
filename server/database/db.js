import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://bharathimani9944:xteUgGWOV1soTL1o@cluster0.b95ifx7.mongodb.net/freelance");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};
