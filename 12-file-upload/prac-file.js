const { log } = require("console");
const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
            console.log(req.body);
            done(null, req.body.id + ext);
        },
    }),
});

app.get("/", (req, res) => {
    res.render("prac-file");
});

// app.post("/register", uploadDetail.single("uploadfile"), (req, res) => {
//     console.log(req.file);
//     console.log(req.body);
//     res.render("prac-file-result", {
//         file: req.file,
//         data: req.body,
//     });
// });

// 동적 폼 전송
app.post("/dynamic", uploadDetail.single("dynamicfile"), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    console.log(req.body.id);
    res.send({
        file: req.file,
        data: req.body,
    });
});

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});
