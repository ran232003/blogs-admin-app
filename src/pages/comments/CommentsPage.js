import React from "react";
import { comments } from "../../consts";
import Comment from "./components/Comment";
import "./CommentsPage.css";
const CommentsPage = () => {
  return (
    <div className="main-comments">
      <div className="comments-div">
        <div className="comments-header">
          <div className="comment-subtitle">Date Updated</div>
          <div className="comment-subtitle">Content</div>
          <div className="comment-subtitle">Likes</div>
          <div className="comment-subtitle">Post ID</div>
          <div className="comment-subtitle">User ID</div>
          <div className="comment-subtitle">DELETE</div>
        </div>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsPage;
