const info = require("../model/Prac");
// model 파일 연결

// 함수 선언 및 내보내기
exports.prac = (req, res) => {
    // 메인 페이지 렌더링
    res.render("prac");
};
exports.info = (req, res) => {
    // login 기능 발생 시
    if (req.body.id == info.userid() && req.body.pw == info.userpw()) {
        res.send("true");
    } else {
        res.send("false");
    }
};
