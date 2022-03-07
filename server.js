const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
const PORT = 8080;
const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/server_maintain_db', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});


db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully");
});


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully to mongodb");
});
app.listen(PORT, () => {
    console.log(`Server us running on ${PORT}`)
})



app.get('/', (req, res) => {
    res.json({ message: "Welcome to Server Maintances" })
})