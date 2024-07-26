import React from "react";
import "./CreatePost.css";
import HeadLine from "../../global/HeadLine";
import CreatePostInputs from "./components/CreatePostInputs";
import { useLocation } from "react-router-dom";
const CreatePost = () => {
  const location = useLocation();
  const post = location.state?.data;
  console.log(post);
  return (
    <div className="mainCreatePost">
      <HeadLine cssClass="create-post-head" title="Create a Post" />
      <CreatePostInputs post={post} />
    </div>
  );
};

export default CreatePost;
