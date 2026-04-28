import express from "express";
import sum from "./sum.js"

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
})

app.get("/", (req, res) => {
    res.json({
        msg: "Hello world"
    })
})

app.get("/getsum/:a/:b", (req, res) => {
    const {a, b} = req.params;

    res.json({
        answer: sum(parseInt(a), parseInt(b))
    })
})