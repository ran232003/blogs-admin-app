import React from "react";

const Comment = ({ comment }) => {
  const { dataUpdated, content, likes, postId, userId } = comment;
  return (
    <div className="comment-row">
      <div className="comment-data">{dataUpdated}</div>
      <div className="comment-data">{content}</div>
      <div className="comment-data">{likes}</div>
      <div className="comment-data">{postId}</div>
      <div className="comment-data">{userId}</div>
      <div className="comment-data delete">DELETE</div>
    </div>
  );
};

export default Comment;
