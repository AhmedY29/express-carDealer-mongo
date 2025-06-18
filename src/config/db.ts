
import mongoose from "mongoose";
import dotenv from "dotenv" 

dotenv.config()

export async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(process.env.MONGO_URI as string);
    if(mongoose.connection.db){
        await mongoose.connection.db.admin().command({ ping: 1 });
    }
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
