const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const session = require("express-session");
app.use(
    session({
        secret: "mySession",
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            maxAge: 60 * 1000
        }
    })
);

app.get("/", (req, res) => {
    res.render("session_prac", {
        isLogin: req.session.isLogin,
        id: req.session.userid
    });
});

app.get("/signup", (req, res) => {
    // console.log(req.body);
    req.session.userid = req.query.id;
    req.session.userpw = req.query.pw;
    console.log(req.session);
    res.send(req.query);
});

app.get("/login", (req, res) => {
    if (
        req.session.userid == req.query.id &&
        req.session.userpw == req.query.pw
    ) {
        req.session.isLogin = true;
    } else {
        req.session.isLogin = false;
    }
    console.log(req.session.isLogin);
    res.send(req.session.isLogin);
});

app.get("/logout", (req, res) => {
    req.session.isLogin = false;
    res.send(req.session.isLogin);
});

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
