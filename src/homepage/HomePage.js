import React, { useEffect } from "react";
import HeadLine from "../global/HeadLine";
import { homePageSubTitle, homePageTitle } from "../consts";
import { useApiHelper } from "../global/apiHelper";
import { GET_POSTS_SEARCH } from "../URLS";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../store/postSlice";
import BlogList from "../pages/Blogs/components/BlogList";

const HomePage = (props) => {
  const { handleApiCall } = useApiHelper();
  const postSearch = useSelector((state) => state.post.postSearch); // Get postSearch from the Redux store

  const dispatch = useDispatch();
  const getPostComments = async () => {
    const query = new URLSearchParams({ sort: "Latest", limit: 3 }).toString();
    let url = GET_POSTS_SEARCH + query;
    handleApiCall(
      "GET",
      GET_POSTS_SEARCH,
      {},
      (data) => {
        dispatch(postAction.setPostSearch(data.data));
      },
      () => {}
    );
  };
  useEffect(() => {
    getPostComments();
  }, []);
  return (
    <div>
      <HeadLine
        cssClass="homePageTitle"
        title={homePageTitle}
        subTitle={homePageSubTitle}
        subTitleClass="homePageSubTitleClass"
        titleClass="homePageTitleClass"
      />
      <HeadLine
        cssClass="recent-post-title"
        title="Recent Posts"
        titleClass="homePageTitleClass"
      />
      <BlogList mainCss="homePage-css" dashBoardPosts={postSearch} />
    </div>
  );
};

export default HomePage;
