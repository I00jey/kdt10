const express = require("express");
const router = express.Router();

//controller 파일 연결
const controller = require("../controller/Cprac");

// Get /
router.get("/", controller.prac);
// Post /login
router.post("/login", controller.info);

module.exports = router;
