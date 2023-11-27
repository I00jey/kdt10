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
    // userid, userpw라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
    // 결과 값을 반환
    if (req.body.id == userid && req.body.pw == userpw) {
        res.send("true");
    } else {
        res.send("false");
    }
});

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
