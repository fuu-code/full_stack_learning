import express from "express";
import bodyParser from "body-parser";
import pg from  "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "2001",
  port: 5432
});

db.connect()

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function getTasksList() {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC");
  const data = result.rows
  console.log(data)
  return data
};


app.get("/", async (req, res) => {
  const items = await getTasksList() 
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});


app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  if (!item || item.trim() === "") {
    return res.redirect("/");
  };

  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item])
  } catch (err) {
    console.error("Error adding item", err)
    res.redirect("/")
  };

  res.redirect("/");
});


app.post("/edit", async (req, res) => {
  const currentID = req.body.updatedItemId;
  const newTitle = req.body.updatedItemTitle; 
  if (!newTitle || newTitle.trim() === "") {
    res.redirect("/")
  }

  try {
    const updatedItem = await db.query("UPDATE items SET title = $1 WHERE id = $2", [newTitle, currentID]);
  } catch (err) {
    console.error("Error updating task", err)
    res.redirect("/");
  };
  res.redirect("/")
});


app.post("/delete", async (req, res) => {
  const deleteId = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1", [deleteId])
  } catch (err) {
    console.error("Error deleting the task", err);
    res.redirect("/")
  };
  res.redirect("/")
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
