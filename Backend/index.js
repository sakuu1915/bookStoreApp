import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js"

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4001;
const URI=process.env.MongodbURI
//connect to mongodb
mongoose.connect(URI)
   .then(()=>{
       console.log("Connected to MongoDB");
   })
   .catch((error)=>{
    console.log("MongoDB Connection error:" ,error);
   });

// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
