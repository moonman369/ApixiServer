import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from Apixi API!!");
});

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }

  app.listen(8080, () => console.log("Server has started on port 8080"));
};

startServer();
