import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { apiCall } from "../../../apiCall";
import { ADD_REMOVE_LIKE, UPDATE_COMMENT } from "../../../URLS";
import { useApiHelper } from "../../../global/apiHelper";

const CommentItem = ({
  content,
  createdAt,
  likes,
  userId,
  commentId,
  user,
  postId,
  getPostComments,
}) => {
  const [likeCount, setLikeCount] = useState(likes.length);
  const { handleApiCall } = useApiHelper();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedContent(content); // Reset to original content if canceled
  };
  const handleSaveClick = async () => {
    handleApiCall(
      "POST",
      UPDATE_COMMENT,
      {
        commentId: commentId,
        content: editedContent,
        postId: postId,
      },
      () => {
        getPostComments();
        setIsEditing(false);
      },
      HandleFail
    );
  };
  const checkIsLiked = likes.find((id) => {
    return id === userId?._id;
  });
  const [isLiked, setIsLiked] = useState(!!checkIsLiked);

  const handleLikeClick = async () => {
    handleApiCall(
      "POST",
      ADD_REMOVE_LIKE,
      {
        like: !isLiked,
        commentId: commentId,
      },
      HandleLike,
      HandleFail
    );
    // const data = await apiCall("POST", ADD_REMOVE_LIKE, {
    //   like: !isLiked,
    //   commentId: commentId,
    // });
    // if (data.status === "ok") {
    //   if (isLiked) {
    //     setLikeCount(likeCount - 1);
    //   } else {
    //     setLikeCount(likeCount + 1);
    //   }
    //   setIsLiked(!isLiked);
    // }
  };
  const HandleLike = (data) => {
    if (data.status === "ok") {
      if (isLiked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setIsLiked(!isLiked);
    }
  };
  const HandleFail = (data) => {
    console.log(data.msg);
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
        {isEditing ? (
          <div>
            <Form.Control
              as="textarea"
              rows={3}
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <div className="edit-actions">
              <Button variant="primary" onClick={handleSaveClick}>
                Save
              </Button>
              <Button
                className="btn-edit"
                variant="secondary"
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="comment-content">{content}</div>
        )}
        <div className="comment-actions">
          <Button
            variant="outline-primary"
            className={`like-button ${isLiked ? "liked" : ""}`}
            onClick={handleLikeClick}
          >
            {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
          </Button>
          <span className="like-count">{likeCount}</span>
          {userId._id === user?._id && !isEditing ? (
            <div>
              <span className="editComment" onClick={handleEditClick}>
                Edit
              </span>
              <span className="deleteComment">Delete</span>
            </div>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CommentItem;
