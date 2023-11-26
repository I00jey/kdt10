const express = require("express");
const app = express();
const PORT = 8310;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("prac2");
});

const userid = "user";
const userpw = "1111";

app.post("/login", (req, res) => {
    if (req.body.id == userid && req.body.pw == userpw) {
        res.send("true");
    } else {
        res.send("false");
    }
});

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
