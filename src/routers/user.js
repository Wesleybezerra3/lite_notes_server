const express = require('express');
const router = express.Router();

const userController = require("../controllers/user");
// const authMiddleware = require("../middlewares/authMiddleware");

router.post("/users", userController.createUser);
router.post("/users/login", userController.loginUser);
router.get("/users", userController.readUsers);
router.put("/users", userController.updateUser);

module.exports = router;