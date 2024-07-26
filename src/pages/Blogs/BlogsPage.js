import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import SideBarSearch from "./components/SideBarSearch";
import BlogList from "./components/BlogList";
import { apiCall } from "../../apiCall";
import { GET_POSTS_DASHBOARD_URL, GET_POSTS_SEARCH } from "../../URLS";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../../store/postSlice";
const BlogsPage = () => {
  const [inputs, setInputs] = useState({
    search: "",
    sort: "",
    category: "",
  });
  const dispatch = useDispatch();
  const postSearch = useSelector((state) => {
    return state.post.postSearch;
  });
  const getBlogs = async () => {
    const query = new URLSearchParams(inputs).toString();
    console.log(query);
    let url = GET_POSTS_SEARCH + query;
    console.log(url, "url");

    try {
      const data = await apiCall("GET", url);
      if (data.status === "ok") {
        dispatch(postAction.setPostSearch(data.data));
      }
    } catch (error) {}
  };
  useEffect(() => {
    getBlogs();
  }, [dispatch]);
  return (
    <div className="SearchPage">
      <SideBarSearch
        getBlogs={getBlogs}
        inputs={inputs}
        setInputs={setInputs}
      />
      <BlogList dashBoardPosts={postSearch} />
    </div>
  );
};

export default BlogsPage;
