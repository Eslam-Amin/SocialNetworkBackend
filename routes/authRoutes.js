const router = require("express").Router();

const authController = require("./../controllers/authController");

//Register new User
router.post("/register", authController.register)

//login 
router.post("/login", authController.login);
router.get("/clear-cookie", authController.clearCookie);
router.post("/forget-password", authController.forgotPassowrd);
router.post("/reset-password/:token", authController.resetPassword);

module.exports = router;