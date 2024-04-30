const router = require("express").Router();

const authController = require("./../controllers/authController");

//Register new User
router.post("/register", authController.register)

//login 
router.post("/login", authController.login);

module.exports = router;