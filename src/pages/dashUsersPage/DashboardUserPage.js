import React from "react";
import "../comments/CommentsPage.css";
import { comments } from "../../consts";
import Comment from "../comments/components/Comment";
const DashboardUserPage = () => {
  return (
    <div className="main-comments">
      <div className="comments-div">
        <div className="comments-header">
          <div className="comment-subtitle">Date Created</div>
          <div className="comment-subtitle">User Image</div>
          <div className="comment-subtitle">UserName</div>
          <div className="comment-subtitle">Email</div>
          <div className="comment-subtitle">Admin</div>
          <div className="comment-subtitle">DELETE</div>
        </div>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default DashboardUserPage;
