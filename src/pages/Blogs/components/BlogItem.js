import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const BlogItem = (props) => {
  const { post } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${post.title}`, { state: { data: post } });
  };
  return (
    <Card
      onClick={handleClick}
      className="post-card"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={post.image} style={{ height: "9rem" }} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        <p>{post.category}</p>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
