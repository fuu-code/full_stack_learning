import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

const db = new pg.Client({
  host: "localhost",
  user: "postgres",
  database: "book",
  password: "2001",
  port: 5432
});
db.connect();


async function getBooks() {
  const result = await db.query("SELECT * from books ORDER BY id ASC");
  const data = result.rows
  return data
};


app.get("/", async (req, res) => {
  const result = await getBooks()
  res.render("index.ejs", { info: result })
});

app.post("/add", async (req, res) => {
  const newName = req.body.userName;
  const newTitle = req.body.bookTitle;
  const newCover = req.body.coverPageUrl;
  const newComment = req.body.comment;
  try {
    const newBook = await db.query("INSERT INTO books (name, book_title, book_cover, comment) VALUES ($1, $2, $3, $4)", 
      [newName, newTitle, newCover, newComment]);
    res.redirect("/")
  } catch (err) {
    console.error('Cannot add new book', err);
    res.redirect("/")
  };
    res.redirect("/")
});


// WORK IN PROGRESS FOR UPDATE
app.post("/edit", async (req, res) => {

});

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});

