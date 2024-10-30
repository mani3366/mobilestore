import express from "express";
import { connectDb } from "./database/db.js";
import Routes from "../server/routes/phoneDataRouter.js";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

const port = 5005;

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/api", Routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb();
});
