const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "qirkdfklafdklwejroiwfdk";

const userInfo = { id: "banana", pw: "1234", name: "홍길동", age: 29 };

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/login", (req, res) => {
    res.render("login");
});
// 로그인 요청
app.post("/login", (req, res) => {
    // jwt를 만들 때에 오류가 날 수 있음
    try {
        const { id, pw } = req.body;
        const { id: realID, pw: realPw } = userInfo;

        if (id === realID && pw === realPw) {
            // 토큰 생성
            // jwt.sign (payLoad, secretOrPrivateKeu, [options, callback])
            const token = jwt.sign({ id: id }, SECRET);
            res.send({ isLogin: true, token });
        } else {
            res.send({
                isLogin: false,
                msg: "로그인 정보가 올바르지 않습니다!"
            });
        }
    } catch (error) {
        console.error(error);
    }
});
app.post("/token", (req, res) => {
    // 헤더에 있는 토큰 가져오기
    console.log("token >", req.headers.authorization);
    // 토큰이 있을 때
    if (req.headers.authorization) {
        //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhbmFuYSIsImlhdCI6MTcwMjA5MjM2OX0.wl2iXE_2gLcfjyqvWLpllLojrejpwwmo0g2qb4FLMSY
        const authorization = req.headers.authorization.split(" ");
        console.log(authorization); //['Bearer', 'token_string']
        const token = authorization[1];

        try {
            // 토큰 검증 jwt.verify(token, secret)
            const result = jwt.verify(token, SECRET);
            console.log(result);

            if (result.id === userInfo.id) {
                res.send({ isVerify: true, name: userInfo.name });
            } else {
                res.send({ isVerify: false, msg: "잘못된 접근입니다!" });
            }
        } catch (error) {
            console.log("verify err >", error);
            res.send({ isVerify: false, msg: "인증된 회원이 아닙니다!" });
        }
    } else {
        // 토큰이 없을 때
        res.redirect("/login");
    }
});
app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
