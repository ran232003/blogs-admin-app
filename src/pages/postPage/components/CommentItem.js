import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { apiCall } from "../../../apiCall";
import { ADD_REMOVE_LIKE } from "../../../URLS";

const CommentItem = ({ content, createdAt, likes, userId, commentId }) => {
  const [likeCount, setLikeCount] = useState(likes.length);
  const checkIsLiked = likes.find((id) => {
    console.log(id, userId?._id);
    return id === userId?._id;
  });
  console.log(checkIsLiked, userId);
  const [isLiked, setIsLiked] = useState(!!checkIsLiked);

  const handleLikeClick = async () => {
    const data = await apiCall("POST", ADD_REMOVE_LIKE, {
      like: !isLiked,
      commentId: commentId,
    });
    if (data.status === "ok") {
      if (isLiked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setIsLiked(!isLiked);
    }
  };
  return (
    <Card className="comment-item">
      <Card.Body>
        <div className="comment-header">
          <img src={userId.image} alt="User" className="user-image" />
          <div className="user-info">
            <span className="user-name">{userId.userName}</span>
            <span className="comment-date">
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="comment-content">{content}</div>
        <div className="comment-actions">
          <Button
            variant="outline-primary"
            className={`like-button ${isLiked ? "liked" : ""}`}
            onClick={handleLikeClick}
          >
            {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
          </Button>
          <span className="like-count">{likeCount}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CommentItem;
