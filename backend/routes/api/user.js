const express = require('express');
const router = express.Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
    .post(userController.addUser) // Create
    .get(userController.getUser) // Read
    .put(userController.updateUser) // Update
    .delete(userController.deleteUser) // Delete

// Matches with "/api/user/courseId"
router.route("/:courseId")
    .post(userController.addUserToCourse)
    .get(userController.getUserType)
module.exports = router;
