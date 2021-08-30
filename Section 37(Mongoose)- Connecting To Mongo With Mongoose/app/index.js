const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/movieApp")
    .then(() => {
        console.log("connection open!!!");
    })
    .catch((err) => {
        console.log("oh no error!!!!");
        console.log(err);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// let bigFatLiar = new Movie({
//     title: "Big Fat Liar",
//     year: 2002,
//     score: 5,
// });

// bigFatLiar.save();

// Movie.insertMany([
//     { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
//     { title: "Alien", year: 1979, score: 8.1, rating: "R" },
//     { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
//     { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
//     { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
// ]).then((data) => {
//     console.log("IT WORKED!");
//     console.log(data);
// });
