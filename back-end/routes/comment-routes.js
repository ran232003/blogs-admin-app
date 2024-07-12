let express = require("express");

const { checkSchema, verifyToken } = require("../middleware/schemaValidation");
const upload = require("../middleware/uploadFile");
const {
  getComments,
  deleteComment,
} = require("../controllers/comment-controller");
const router = express.Router();
router.get("/getCommentsDashboard", getComments);
router.delete("/deleteComment/:id", deleteComment);

module.exports = router;
