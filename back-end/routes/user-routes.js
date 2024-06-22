let express = require("express");
const {
  signup,
  login,
  updateUser,
} = require("../controllers/user-controllers");
const { checkSchema } = require("../middleware/schemaValidation");
const upload = require("../middleware/uploadFile");
const router = express.Router();
router.post("/signup", checkSchema("signup.json"), signup);
router.post("/login", checkSchema("login.json"), login);
router.post("/updateUser", upload.single("file"), updateUser);

module.exports = router;
