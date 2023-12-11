const express = require("express");
const router = express.Router();
const controller = require("../controller/Cindex");

router.get("/", controller.main);
router.post("/signup", controller.signup);
router.post("/login", controller.login);

module.exports = router;
