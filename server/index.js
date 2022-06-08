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

// app.get("/login", (req, res) => {
//   console.log(req.body, "request body");
// });

// app.get("/auth/login", (req, res) => {
//   console.log(req.body, "/auth/login");
//   res.send("/auth/login");
// });

app.post("/api/google", (req, res) => {
  //   console.log("req body response", req.body.code);
  let code = req.body.code;
  googleOAuthHandler(code);
  res.send("accepting");
});

app.listen(PORT, () => {
  console.log("Server running on ", PORT);
});
