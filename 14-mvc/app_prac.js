const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");

// routes 파일 연결
const pracRouter = require("./routes/prac");

//localhost:port/ 경로를 기본으로 ./routes/prac.js 파일에 선언된 대로 동작
app.use("/", pracRouter);

app.get("*", (req, res) => {
    res.render("404");
});

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});
