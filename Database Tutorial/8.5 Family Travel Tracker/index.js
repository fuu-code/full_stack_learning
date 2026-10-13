import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "2001",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let familyUserId = 1;

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];
 
async function familyUser() {
  const result = await db.query("SELECT * FROM users")
  users = result.rows
  return users.find((user) => user.id == familyUserId);
};

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries_family v JOIN users u ON u.id = v.user_id WHERE user_id = $1", 
  [familyUserId]
);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code)
  });
  return countries;
}


app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  const currentFamily = await familyUser();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentFamily.color,
  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];
  const currentFamily = await familyUser()

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries_family (country_code, user_id) VALUES ($1, $2)",
        [countryCode, familyUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/user", async (req, res) => {
  if (req.body.add === "new") {
    res.render("new.ejs");
  } else {
    familyUserId = req.body.user;
    res.redirect("/")
  }
});

app.post("/new", async (req, res) => {
  const new_name = req.body.name;
  const color = req.body.color;

  const result = await db.query(
    "INSERT INTO users (name, color) VALUES($1, $2) RETURNING *;", 
    [new_name, color]
    );
  
  const id = result.rows[0].id;
  familyUserId = id;

  res.redirect("/")
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});