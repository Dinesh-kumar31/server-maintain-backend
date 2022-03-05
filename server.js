const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 8080;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`Server us running on ${PORT}`)
})


app.get('/', (req, res) => {
    res.json({ message: "Welcome to Server Maintances" })
})