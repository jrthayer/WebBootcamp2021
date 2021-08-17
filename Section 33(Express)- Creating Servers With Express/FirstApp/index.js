const express = require('express');
const app = express();

//start server, available on port 3000
app.listen(3000, (req, res) => {
    console.log('listening on port 3000!');
});

//every request
// app.use((req, res) => {
//     console.log('we got a request!');
//     res.send({test: "We got your request!!!"});
// });

//paths are done in order
app.get('/', (req,res) => {
    res.send("This is the homepage!");
})

app.get('/r/:variable/:variable2', (req,res) => {
    let { variable: test, variable2: id } = req.params;
    res.send(`This is subreddit ${test} with ${id}`);
    //query strings are found in req.query
    console.log(req.query);
})

app.get('/cats', (req,res) => {
    res.send("Cat Request!!!");
})

app.get('/dogs', (req,res) => {
    res.send("Dog Request!!!");
})



//all paths not defined
app.get('*', (req,res) => {
    res.send("Random Path!!");
})