import express from "express";
import { googleOAuthHandler2 } from "./googleOAuthHandler2.js";
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

app.get("/auth/login", googleOAuthHandler2);

app.listen(PORT, () => {
  console.log("Server running on ", PORT);
});
