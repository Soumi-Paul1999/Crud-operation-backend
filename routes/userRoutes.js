const express = require("express");
const { createUser, getAllUsers, getUser, updateUser, deleteUser } = require("../controllers/userController");
const router = express.Router();


router.route("/").get(getAllUsers)
router.route("/createUser").post(createUser);
router.route("/getUser/:id").get(getUser);
router.route("/updateUser/:id").put(updateUser);
router.route("/deleteUser/:id").delete(deleteUser);


module.exports = router;