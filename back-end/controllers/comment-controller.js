const MyError = require("../models/MyError");
const Comment = require("../models/comment-schema");

const getComments = async (req, res, next) => {
  try {
    console.log("getComments");
    const comments = await Comment.find({});
    return res.json({ status: "ok", data: comments });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
const deleteComment = async (req, res, next) => {
  try {
    console.log("deleteComment");
    const commentId = req.params.id;
    const comment = await Comment.deleteOne({ _id: commentId });
    const comments = await Comment.find();

    return res.json({ status: "ok", data: comments });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
module.exports = {
  getComments,
  deleteComment,
};
