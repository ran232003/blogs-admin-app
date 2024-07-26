import React from "react";
import CommentItem from "./CommentItem";

const CommentList = (props) => {
  const { comments } = props;
  return (
    <div className="commentList">
      {comments.map((comment, index) => {
        return (
          <CommentItem
            key={index}
            content={comment.content}
            createdAt={comment.createdAt}
            likes={comment.likes}
            userId={comment.userId}
            commentId={comment._id}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
