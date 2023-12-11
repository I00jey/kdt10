const { type } = require("os");
const models = require("../models/Mindex");
const User = models.User;

const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.main = (req, res) => {
    res.render("index");
};

exports.signup = (req, res) => {
    const hashedPW = bcrypt.hashSync(req.body.pw, saltRounds);
    User.create({
        userid: req.body.userid,
        pw: hashedPW,
        name: req.body.name
    })
        .then((result) => {
            console.log("create result >", result);
            res.send({ signUp: true, msg: "회원가입 성공😊" });
        })
        .catch((error) => {
            console.log("create err >", error);
            res.send({ signUp: false, msg: "회원가입 실패ㅠ" });
        });
};

exports.login = (req, res) => {
    User.findOne({
        where: { userid: req.body.userid, name: req.body.name }
    })
        .then((result) => {
            const comparePw = bcrypt.compareSync(req.body.pw, result.pw);
            if (comparePw) {
                res.send({ logIn: true, msg: "로그인 성공😊" });
            } else {
                res.send({ logIn: false, msg: "비밀번호 오류" });
            }
        })
        .catch((error) => {
            console.log("findOne err >", error);
            res.send({ msg: "일치하는 계정이 없습니다." });
        });
};
