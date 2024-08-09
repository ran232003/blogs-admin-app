import React from "react";
import CommentItem from "./CommentItem";

const CommentList = (props) => {
  const { comments, user, postId, getPostComments } = props;
  return (
    <div className="commentList">
      {comments.map((comment, index) => {
        return (
          <CommentItem
            key={index}
            getPostComments={getPostComments}
            postId={postId}
            content={comment.content}
            createdAt={comment.createdAt}
            likes={comment.likes}
            userId={comment.userId}
            user={user}
            commentId={comment._id}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
