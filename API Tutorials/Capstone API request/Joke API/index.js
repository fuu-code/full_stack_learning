import axios from "axios";
import express from "express";
import bodyParser from "body-parser";


const port = 3000;
const app = express();

const API_URL = "https://v2.jokeapi.dev/joke/Any?type=twopart"

app.use(express.static("public"));


app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        const firstPart = JSON.stringify(result.data.setup);
        const secondPart = JSON.stringify(result.data.delivery);
        res.render("index.ejs", { jokeSetup: firstPart, jokePunchline: secondPart });
    } catch (error) {
        console.log(error.response.data);
        res.status(500)
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});