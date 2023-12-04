const express = require("express");
const router = express.Router();

const controller = require("../controller/Cprac");
router.get("/", controller.index);
router.get("/signup", controller.signup);
router.post("/signup", controller.newsignup);
router.get("/signin", controller.signin);
router.post("/signin", controller.newsignin);
router.get("/profile", controller.profile);
router.post("/profile/edit", controller.editprofile);
router.post("/profile/delete", controller.deleteprofile);

module.exports = router;
