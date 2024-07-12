import React from "react";
import "./CreatePost.css";
import HeadLine from "../../global/HeadLine";
import CreatePostInputs from "./components/CreatePostInputs";
const CreatePost = () => {
  return (
    <div className="mainCreatePost">
      <HeadLine cssClass="create-post-head" title="Create a Post" />
      <CreatePostInputs />
    </div>
  );
};

export default CreatePost;
