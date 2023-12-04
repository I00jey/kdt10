const model = require("../model/Mprac");

exports.index = (req, res) => {
    res.render("index");
};
exports.signup = (req, res) => {
    res.render("signup");
};
exports.newsignup = (req, res) => {
    model.newsignup(req.body, (result) => {
        // console.log("Cprac >", result);
        res.send("회원가입 성공");
    });
};
exports.signin = (req, res) => {
    res.render("signin");
};
exports.newsignin = (req, res) => {
    model.newsignin(req.body.userid, (result) => {
        // console.log("Cprac >", result);
        res.send({
            userid: result.userid,
            pw: result.pw
        });
    });
};

exports.profile = (req, res) => {
    res.render("profile");
};
exports.editprofile = (req, res) => {
    model.editprofile(req.body, (result) => {
        if (result >= 1) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
};

exports.deleteprofile = (req, res) => {
    model.deleteprofile(req.body.userid, (result) => {
        if (result >= 1) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
};
