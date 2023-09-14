import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from Apixi API!!");
});

const startServer = () => {
  app.listen(8080, () => console.log("Server has started on port 8080"));
};

startServer();
