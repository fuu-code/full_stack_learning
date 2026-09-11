import dotenv from  "dotenv";
import express, { response } from "express";
import axios from "axios";

dotenv.config();
const token = process.env.API_TOKEN;
const API_URL = "https://api.blockchain.com/v3/exchange"
const PORT = 3000;
const app = express();


app.use(express.static("public"));

const config = {
    headers: { "X-API-Token": token}, 
}


app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/tickers", config);
        const tickers = result.data;
        tickers.sort((a, b) => b.last_trade_price - a.last_trade_price);
        res.render("index.ejs", { tickers });
    } catch (error) {
        console.error("Error fetching tickers:", error.message);
        res.status(500).render("index.ejs", { tickers: [] })
    }
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

