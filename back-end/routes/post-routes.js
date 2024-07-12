let express = require("express");

const { checkSchema, verifyToken } = require("../middleware/schemaValidation");
const upload = require("../middleware/uploadFile");
const {
  getPosts,
  deletePost,
  createPost,
} = require("../controllers/post-controller");
const router = express.Router();
router.get("/getPostsDashboard", getPosts);
router.delete("/deletePost/:id", deletePost);
router.post("/createPost", verifyToken, upload.single("file"), createPost);

module.exports = router;
