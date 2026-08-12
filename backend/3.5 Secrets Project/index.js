//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

var password = "helloworld";

// var authorized = false;

// function passwordChecker(req, res, next) {
//   const password = req.body["password"];
//   console.log(req.body["password"]);
//   if (password == "ILoveYou") {
//     authorized = true;
//   }
//   next();
// }

// app.use(passwordChecker);

app.get("/", (req, res) => {
  res.sendFile(dirName + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (req.body["password"] === password) {
    res.sendFile(dirName + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
