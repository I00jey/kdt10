const models = require("../models/index");
const User = models.User;

exports.main = (req, res) => {
    res.render("index");
};

exports.get_signup = (req, res) => {
    res.render("signup");
};

exports.get_signin = (req, res) => {
    res.render("signin");
};

// 회원가입 요청
exports.post_signup = (req, res) => {
    // 뷰 (요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰 (응답)

    // [Before]
    // console.log("post_signup >", req.body);

    // User.post_signup(req.body, (result) => {
    //     // result: rows
    //     res.send(result);
    // })

    // [After]
    User.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw
    }).then((result) => {
        console.log(result);
        res.send(result);
    });
};

// 로그인 요청
exports.post_signin = (req, res) => {
    // console.log(req.body);
    // [Before]
    // User.post_signin(req.body, (result) => {
    //     // result: rows [{}]
    //     if (result.length > 0) res.send({ isLogin: true, userInfo: result[0] });
    //     else res.send({ isLogin: false });
    // });

    // [After]
    User.findOne({
        where: { userid: req.body.userid, pw: req.body.pw }
    }).then((result) => {
        if (result) {
            console.log(result); //백엔드에서 result는 길게 나오지만 프론트로 넘어가게 되면 dataValues 값만 넘겨짐
            // user {
            //     dataValues: { id: 4, userid: 'kiwi', name: '키위', pw: '3333' },
            //     _previousDataValues: { id: 4, userid: 'kiwi', name: '키위', pw: '3333' },
            //     uniqno: 1,
            //     _changed: Set(0) {},
            //     _options: {
            //       isNewRecord: false,
            //       _schema: null,
            //       _schemaDelimiter: '',
            //       raw: true,
            //       attributes: [ 'id', 'userid', 'name', 'pw' ]
            //     },
            //     isNewRecord: false
            //   }
            res.send({ isLogin: true });
        } else {
            res.send({ isLogin: false });
        }
    });
};

// 회원정보 수정 페이지 요청
exports.post_profile = (req, res) => {
    // console.log(req.body); // {userid: ~}
    // [Before]
    // User.post_profile(req.body.userid, (result) => {
    //     // result: rows [{}]

    //     if (result.length > 0) res.render("profile", { data: result[0] });
    // });

    // [After]
    User.findOne({ where: { userid: req.body.userid } }).then((result) => {
        if (result) {
            console.log(result);
            res.render("profile", { data: result });
        }
    });
};

// 회원정보 수정 요청
exports.edit_profile = (req, res) => {
    console.log(req.body);

    // [Before]
    // User.edit_profile(req.body, (result) => {
    //     res.send("회원정보 수정 성공!");
    // });

    // [After]
    User.update({ name: req.body.name, comment: req.body.comment }, { where: { userid: req.body.userid } }).then((result) => {
        res.send("회원정보 수정 성공!");
    });
};

// 회원 탈퇴 요청
exports.delete_profile = (req, res) => {
    console.log(req.body); // {id: ~}

    // [Before]
    // User.delete_profile(req.body.id, (result) => {
    //     res.send({ deletedId: req.body.id });
    // });

    // [After]
    User.destroy({ where: { id: req.body.id } }).then((result) => {
        res.send({ deletedId: req.body.id });
    });
};
