const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    const value = "This is the home page!";
    res.render("home.ejs", { test: value });
});

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random.ejs", { num });
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render("subreddit.ejs", { subreddit });
});

app.get("/cats", (req, res) => {
    const cats = ["Dimitri", "lucky", "oreo", "felix", "littlefoot"];
    res.render("cats.ejs", { cats });
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
