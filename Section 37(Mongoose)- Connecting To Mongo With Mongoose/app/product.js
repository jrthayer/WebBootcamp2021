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

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    onSale: {
        type: Boolean,
        required: false,
    },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "Bike", price: "test" });

bike.save()
    .then((data) => {
        console.log("It Worked!");
        console.log(data);
    })
    .catch((err) => {
        console.log("oh no error!");
        console.log(err);
    });
