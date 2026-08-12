import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [];

const date = new Date();

const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
});

app.get("/", (req, res) => {
    res.render("index.ejs", { posts: posts });
});

app.post("/create-post", (req, res) => {
    const newPost = { 
        postTitle: req.body["title"],
        postContent: req.body["content"],
        createDate: formatter.format(date).replace(',', ''),
        id: Date.now()
    };
    posts.push(newPost);
    res.redirect("/")
});

app.get('/edit/:id', (req, res) => {
    const targetId = parseInt(req.params.id);
    const foundPost = posts.find(blog => blog.id === targetId);

    if (foundPost) {
        res.render("edit.ejs", {blog: foundPost})
    } else {
        res.status(404).send("Post not found");
    }

});

app.post('/edit/:id', (req, res) => {
    const targetId = parseInt(req.params.id);
    const foundPost = posts.find(blog => blog.id === targetId);

    if (foundPost) {
        foundPost.postTitle = req.body["title"];
        foundPost.postContent = req.body["content"];
        res.redirect("/");
    } else {
        res.status(404).send("Post not found");
    }
});


app.get('/view/:id', (req, res) => {
    const targetId = parseInt(req.params.id);
    const foundPost = posts.find(blog => blog.id === targetId);

    if (foundPost) {
        res.render("view.ejs", {blog: foundPost})
    } else {
        res.status(404).send("Post not found");
    }
});

app.post("/delete/:id", (req, res) => {
    const targetId = parseInt(req.params.id);
    const initialLength = posts.length;
    const filteredPosts = posts.filter(blog => blog.id !== targetId);

    posts.length = 0;
    posts.push(...filteredPosts);

    res.redirect("/");
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



