import React from "react";
import BlogItem from "./BlogItem";

const BlogList = (props) => {
  const { dashBoardPosts } = props;
  console.log(dashBoardPosts);
  if (dashBoardPosts) {
    return (
      <div className="post-list">
        {dashBoardPosts.map((post, index) => {
          return <BlogItem key={index} post={post} />;
        })}
      </div>
    );
  }
};

export default BlogList;
