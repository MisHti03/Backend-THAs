// for user login
const express = require("express");

const router = express.Router();
const { login, signup } = require("../controllers/user");

//MVC is used as a framework to design backend
// model - for the db schemas
// controller - model+view -> helps them cooperate
// view - whatever the user sees

router.post("/signup", signup);
router.post("/login", login);
module.exports = router;