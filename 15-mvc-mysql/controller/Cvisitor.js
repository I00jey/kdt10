const Visitor = require("../model/Visitor");

// GET /
exports.main = (req, res) => {
    res.render("index");
};

// GET /visitor
exports.get_visitors = (req, res) => {
    // [Before]
    // console.log(Visitor.getVisitors()); // [ {}, {}]
    // res.render('visitor', { data: Visitor.getVisitors() });

    // [After]
    // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답
    // 콜백함수를 써준 이유 = 비동기 처리를 하기 위해서, 위에 적힌 순서대로 실행되어야 해서
    // 1) Visitor.getVisitors() // 함수 호출
    // 2) 모델에서 데이터값 받은 후에 콜백 함수 실행
    Visitor.getVisitors((result) => {
        // 모델에 rows를 result라는 변수명으로 받음
        console.log("Cvisitor.js >", result);
        res.render("visitor", { data: result });
    });
};

// POST /visitor
exports.post_visitor = (req, res) => {
    console.log(req.body);
    const { name, comment } = req.body;
    // 프론트 요청 시 컨트롤러에서 모델에 필요한 값을 넘겨줘야 함
    // Visitor.postVisitor( view에서 받아온 데이터, 콜백 함수 ) 호출
    Visitor.postVisitor(req.body, (result) => {
        // result = rows.insertId( ex)3 )
        console.log(result);
        // 요청으로 받아온 값에는 id 값이 없으므로 DB에서 가져와서 응답에 넣어줌
        res.send({ id: result, name, comment });
    });
};

// GET /visitor => localhost:PORT/visitor?id=N
exports.get_visitor = (req, res) => {
    console.log(req.query); //{ id: '4' }

    // 모델에 함수 호출
    Visitor.getVisitor(req.query.id, (result) => {
        console.log("Cvisitor.js >", result);
        res.send(result);
    });
};

// GET /visitor => localhost:PORT/visitor/:id

exports.get_visitor2 = (req, res) => {
    console.log(req.params); // { id: '4' }
    console.log(req.params.id); // 4

    // 모델에 함수 호출
    Visitor.getVisitor(req.params.id, (result) => {
        console.log("Cvisitor.js >", result);
        res.send(result);
    });
};

// PATCH /visitor
exports.patch_visitor = (req, res) => {
    console.log(req.body);

    Visitor.patchVisitor(req.body, (result) => {
        console.log("patchVisitor Cvisitor.js >", result);
        res.send("수정 성공!");
    });
};

// DELETE /visitor
exports.delete_visitor = (req, res) => {
    console.log(req.body);
    console.log(req.body.id);

    Visitor.deleteVisitor(req.body.id, (result) => {
        console.log("deleteVisitor CVisitor.js >", result);
        res.send("삭제 성공");
    });
};
