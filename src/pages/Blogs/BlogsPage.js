import React from "react";
import "./BlogPage.css";
import SideBarSearch from "./components/SideBarSearch";
import BlogList from "./components/BlogList";
const BlogsPage = () => {
  return (
    <div className="SearchPage">
      <SideBarSearch />
      <BlogList />
    </div>
  );
};

export default BlogsPage;
