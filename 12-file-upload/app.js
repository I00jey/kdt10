const express = require("express");
const app = express();
const port = 8000;

// static 등록 => 이미지 경로 접근 (프론트)
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer 관련 설정
const multer = require("multer");
const path = require("path"); // 경로에 관한 내장 모듈
const upload = multer({
    dest: "uploads/", // dest : 클라이언트가 업로드한 파일을 저장할 서버측 경로
});

// multer 세부 설정
const uploadDetail = multer({
    // storage : 저장할 공간에 대한 정보
    storage: multer.diskStorage({
        // destination : 경로 설정
        destination(req, file, done) {
            // done : callback 함수
            // done(error, '경로')  error = null -> 에러가 없다는 의미
            done(null, "uploads/"); // 파일을 업로드할 경로 설정
        },
        filename(req, file, done) {
            // 파일의 확장자를 추출 => "path" 모듈 활용
            const ext = path.extname(file.originalname);
            // console.log("ext :", ext);
            // console.log("filename :", path.basename(file.originalname, ext));
            // 확장자를 제외한 파일이름
            // 확장자를 붙였다 떼였다하는 이유 -> Date.now()를 넣어 파일명 중복을 없애기 위해
            console.log(req.body);
            done(
                null,
                path.basename(file.originalname, ext) + Date.now() + ext
            );
        },
    }),
    // limits : 파일 제한 정보
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MBs
    },
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

// // 1. single( ) : 하나의 파일을 업로드
// // upload.single('input:file 태그 name') : 클라이언트 요청이 들어오면,
// // multer 설정에 따라 파일을 업로드한 후, req.file 객체를 생성

// // single( ) 인자는 input 태그의 name 값과 일치시켜야 함
// app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
//     console.log(req.file);
//     // req 파일 객체
//     //{
//     //   fieldname: 'userfile', // 폼에 정의한 name 값
//     //   originalname: 'axios-prac2.mp4',   // 원본 파일명
//     //   encoding: '7bit',  // 파일 인코딩 타입
//     //   mimetype: 'video/mp4', // 파일 타입
//     //   destination: 'uploads/',   // 파일 저장 경로
//     //   filename: 'c5a13fcedb665c4f388432166fac49dc', // 저장된 파일명
//     //   path: 'uploads\\c5a13fcedb665c4f388432166fac49dc', // 업로드된 파일 전체 경로
//     //   size: 3734961 //파일크기
//     // }
//     console.log(req.body);
//     res.send("파일 업로드 완료!");
// });
// // 2. array() : 하나의 인풋에 여러 파일 업로드
// app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
//     // [{file1 정보}, {file2 정보}, ...]
//     console.log(req.files);
//     console.log(req.body);
//     res.send("하나의 인풋에 여러 파일 업로드 완료!");
// });

// // 3. fields() : 여러 파일을 각각의 인풋에 업로드
// app.post(
//     "/upload/fields",
//     uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
//     (req, res) => {
//         /*
//          * {
//          *  userfile1:[
//          *      {파일 정보}
//          *  ],
//          *  userfile2:[
//          *      {파일 정보}
//          *  ]
//          * }
//          */
//         console.log(req.files);
//         console.log(req.body);
//         res.send("여러 개의 인풋에 여러 파일 업로드 완료!");
//     }
// );

// 동적 폼 전송
app.post("/dynamic", uploadDetail.single("dynamicFile"), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send({
        file: req.file,
        title: req.body.title,
    });
});

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});
