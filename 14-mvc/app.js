const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [After] MVC 적용 후에는 Router 객체로 라우터 분리
const indexRouter = require("./routes/index"); //index 생략 가능

const userRouter = require("./routes/user");

//localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작하겠다
app.use("/", indexRouter);
//localhost:PORT/user 경로를 기본으로 ./routes/user.js 파일에 선언한 대로 동작하겠다
app.use("/user", userRouter);

// GET /user

// [404 Error]
// 맨 마지막에 라우트로 선언
// 위에다가 하게 되면 나머지 코드는 무시되기 때문에
app.get("*", (req, res) => {
    res.render("404");
});

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});
