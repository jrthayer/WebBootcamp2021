const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.static("public"));
//this is to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/home/home.html"));
});

let comments = [
    {
        id: uuid(),
        username: "Todd",
        text: "lol that is so funny!",
    },
    {
        id: uuid(),
        username: "Skyler",
        text: "I like to go birdwatching with my dog",
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        text: "Plz delete your account, Todd",
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        text: "woof woof woof",
    },
];

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});

app.post("/comments", (req, res) => {
    const { username, text } = req.body;
    comments.push({ username, text, id: uuid() });

    res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    if (id < 0 || id > comments.length) {
        res.redirect("/comments");
    } else {
        const comment = comments.find((c) => c.id === id);
        res.render("comments/show", { comment });
    }
});

app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newText = req.body.text;
    const comment = comments.find((c) => c.id === id);
    comment.text = newText;
    res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter((c) => c.id !== id);
    res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find((c) => c.id === id);
    res.render("comments/edit", { comment });
});

// GET /comments - list all comments
// GET /comments/:id - get one comment using ID
// POST /comments - create a new comment
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - destroy one comment

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Posted: Meat = ${meat} Num = ${qty}`);
    console.log(req.body);
});

app.get("/*", (req, res) => {
    res.send("404 does not exist");
});

app.listen(3000, () => {
    console.log("listening on port 3000!");
});
