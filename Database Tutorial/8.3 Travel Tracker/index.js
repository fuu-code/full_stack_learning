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

async function alreadyVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code)
  });
  console.log(result.rows);
  return countries
}

app.get("/", async (req, res) => {
  const countries = await alreadyVisited();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req, res) => {
  const newCountry = req.body.country;
  const countryCode = await db.query ("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';", [newCountry.toLowerCase()]);
  const countries = await alreadyVisited();
  try {
    if (countryCode.rows.length !== 0) {
        await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode.rows[0].country_code])
        res.redirect("/")
      } else {
        return res.render("index.ejs", { countries: countries, total: countries.length, error: "Country doesn't exist"} );
      }
  } catch (err) {
    if (err.code === "23505") {
      console.log("Duplicate entry detected for:", countryCode);
      return res.render("index.ejs", { countries: countries, total: countries.length, error: "Country already added"} );
    }
    console.error("Database error:", err.stack);
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
