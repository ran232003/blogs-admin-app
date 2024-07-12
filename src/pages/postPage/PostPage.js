import React from "react";
import HeadLine from "../../global/HeadLine";
import { useLocation } from "react-router-dom";
import "./PostPage.css";
import { Button } from "react-bootstrap";
const PostPage = () => {
  const location = useLocation();
  const data = location.state.data;
  //console.log(data);
  return (
    <div className="main-post-page">
      <HeadLine cssClass="create-post-head" title={data.title} />
      <div className="post-date">
        <span>{new Date(data.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="category">
        <Button disabled variant="outline-info" className="post-button">
          {data.category}
        </Button>
      </div>
      <div className="post-image">
        <img className="postImage" src={data.image} alt="User" />
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </div>
  );
};

export default PostPage;
