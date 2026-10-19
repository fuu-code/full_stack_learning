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
  // 1. Destructure the fields sent from the form's name attributes
  const { bookId, updatedTitle, updatedComment, updatedName } = req.body;

  try {
    // 2. Run the SQL UPDATE query safely using parameters ($1, $2, etc.)
    await db.query(
      "UPDATE books SET book_title = $1, comment = $2, name = $3 WHERE id = $4",
      [updatedTitle, updatedComment, updatedName, bookId]
    );

    // 3. Redirect back to the main page to show the updated list (with early return)
    return res.redirect("/");
    
  } catch (err) {
    // 4. Log the error to stderr and safely redirect home
    console.error("Error updating book record:", err);
    return res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});

