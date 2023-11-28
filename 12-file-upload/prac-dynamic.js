const express = require("express");
const app = express();
const port = 8000;

// static 등록 => 이미지 경로 접근 (프론트)
app.use("/uploads", express.static(__dirname + "/uploads"));

const multer = require("multer");
const path = require("path");

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "uploads/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext);
        },
    }),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MBs
    },
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("prac");
});

app.post("/upload/dynamic", uploadDetail.single("profile"), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send("회원가입 완료");
});

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});
