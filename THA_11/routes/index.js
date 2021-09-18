var express = require("express");
const { routes } = require("../app");
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerChecks");
var register = require("../controllers/register");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/**
 * @requires{ email, password, confirmPassword } - req.body
 * @description
 * Security, performance and edge cases
 * level-1
 * email validate - string
 * password validate
 * password == confirm
 * level-2
 * JS/SQL
 * level-3
 * check if email already exists
 * password hash
 * email lowercase bhartithakur0186@gmail.com / Bhartithakur0186@gmail.com
 * save
 */
router.post("/register", registerInitialCheck, register);
module.exports = router;
