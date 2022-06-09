import express from "express";
import { googleOAuthHandler } from "./googleOAuthHandler.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/google", googleOAuthHandler);

app.listen(PORT, () => {
  console.log("Server running on ", PORT);
});
