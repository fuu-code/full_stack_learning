import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  host: "localhost",
  user: "postgres",
  database: "auth",
  password: "2001",
  port: 5432
})
db.connect()

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

    try {
      const checkExisting = await db.query("SELECT * FROM users WHERE email = $1", [email])
      if (checkExisting.rows.length > 0) {
        res.send("Email already exist, try logging in")
      } else {    
        const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", 
          [email, password]);
        res.render("secrets.ejs")};
      } catch (err) {
        console.error("Something went wrong with the DB", err)
      };


});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  const checkExistingUser = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  if (checkExistingUser.rows.length > 0) {
    const userPassword = checkExistingUser.rows[0].password;
      if (userPassword == password) {
        res.render("secrets.ejs")
      } else {
        res.send("Wrong Password, Try Again")
      };
    } else {
      res.send("Email not Found")
    };

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
