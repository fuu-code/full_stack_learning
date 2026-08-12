import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

const today = new Date();
const dayData = today.getDay();

if (dayData === 0 || dayData === 6) {
  var dayWeek = "Hey! It's the weekend, it's time to have fun!";
} else {
  var dayWeek = "Hey! It's a weekday, it's time to work hard!";
}

app.get("/", (req, res) => {
  res.render("index.ejs", { day: dayWeek });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
