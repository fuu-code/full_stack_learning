import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { dir } from "console";
const dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(dirName + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1> Your Band Name Is: </h1>\n<h2> 🐱‍👤 ${bandName} 🐦`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
