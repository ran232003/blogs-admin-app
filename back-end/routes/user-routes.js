let express = require("express");
const {
  signup,
  login,
  updateUser,
  getUsers,
  deleteUser,
} = require("../controllers/user-controllers");
const { checkSchema, verifyToken } = require("../middleware/schemaValidation");
const upload = require("../middleware/uploadFile");
const router = express.Router();
router.post("/signup", checkSchema("signup.json"), signup);
router.post("/login", checkSchema("login.json"), login);
router.post("/updateUser", verifyToken, upload.single("file"), updateUser);
router.get("/getUserssDashboard", getUsers);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
