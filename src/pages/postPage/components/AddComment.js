// AddComment.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { apiCall } from "../../../apiCall";
import { ADD_POST_COMMENT } from "../../../URLS";

const AddComment = (props) => {
  const { getPostComments, postData } = props;
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    if (comment.length > 200) {
      alert("Comment cannot exceed 200 characters");
      return;
    }
    // Add your form submission logic here
    console.log("Comment submitted:", comment);
    try {
      const data = await apiCall("POST", ADD_POST_COMMENT, {
        comment: comment,
        postId: postData._id,
      });
      getPostComments();
    } catch (error) {}
    setComment("");
  };

  return (
    <div className="add-comment-container">
      <Form.Group controlId="comment">
        <Form.Label>Add a Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={handleCommentChange}
          maxLength={200}
          placeholder="Enter your comment (up to 200 characters)"
        />
      </Form.Group>
      <div className="button-container">
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
