import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user:  "postgres",
  host: "localhost",
  database: "world",
  port: 5432,
  password: "2001",
})

db.connect()



app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code)
  });
  console.log(result.rows)
  res.render("index.ejs", { countries: countries, total: countries.length });
  db.end();
});



app.post("/add", (req, res) => {
  const new_country = req.body.country;
  res.render("index.ejs", { countries: new_country })
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
