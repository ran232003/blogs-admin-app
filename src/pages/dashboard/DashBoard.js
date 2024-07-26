import React, { useEffect, useState } from "react";
// import DashSidebar from "./components/DashSidebar";
import "./DashBoard.css";
import DashboardSidebar from "./components/DashboardSidbar";
import TotalInfo from "./components/TotalInfo";
import RecentInfo from "./components/RecentInfo";
import {
  commentPage,
  comments,
  commentsFields,
  postsData,
  postsFields,
  postsPage,
  recentComments,
  recentUsers,
  userPage,
  usersData,
  usersFields,
} from "../../consts";
import DashboardPage from "./components/DashboardPage";
import CommentsPage from "../comments/CommentsPage";
import { useLocation } from "react-router-dom";
import DashboardUserPage from "../dashUsersPage/DashboardUserPage";
import DashTemplate from "../dashboardTemplate/DashTemplate";
import ProfilePage from "../profile/ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_COMMENTS_DASHBOARD_URL,
  GET_POSTS_DASHBOARD_URL,
  GET_USERS_DASHBOARD_URL,
} from "../../URLS";
import { apiCall } from "../../apiCall";
import { postAction } from "../../store/postSlice";
import { commentAction } from "../../store/commentSlice";
import { userAction } from "../../store/userSlice";

const DashBoard = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const [tab, setTab] = useState("");
  const user = useSelector((state) => {
    return state.user.user;
  });
  const dashBoardPosts = useSelector((state) => {
    return state.post.dashBoardPosts;
  });
  const dashBoardComments = useSelector((state) => {
    return state.comment.dashBoardComments;
  });
  const dashBoardUsers = useSelector((state) => {
    return state.user.dashBoardUsers;
  });
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    } else {
      setTab(""); // default to empty string if no tab is specified
    }
  }, [location.search]);
  const getData = async () => {
    const [postsResponse, commentsResponse, usersResponse] = await Promise.all([
      apiCall("GET", GET_POSTS_DASHBOARD_URL),
      apiCall("GET", GET_COMMENTS_DASHBOARD_URL),
      apiCall("GET", GET_USERS_DASHBOARD_URL),
    ]);
    if (
      postsResponse.status === "ok" &&
      commentsResponse.status === "ok" &&
      usersResponse.status === "ok"
    ) {
      dispatch(postAction.setDashBoardPosts(postsResponse.data));
      dispatch(commentAction.setDashBoardComments(commentsResponse.data));
      dispatch(userAction.setUsers(usersResponse.data));
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="main-dash">
      <DashboardSidebar user={user} />
      {tab === "dash" || tab === "" ? (
        <DashboardPage
          dashBoardUsers={dashBoardUsers}
          dashBoardComments={dashBoardComments}
          dashBoardPosts={dashBoardPosts}
        />
      ) : null}
      {tab === "profile" && <ProfilePage />}
      {tab === "comments" && (
        <DashTemplate
          data={dashBoardComments}
          titles={commentPage}
          fields={commentsFields}
          tabFromUrl={tab}
        />
      )}
      {tab === "users" && (
        <DashTemplate
          data={dashBoardUsers}
          titles={userPage}
          fields={usersFields}
          tabFromUrl={tab}
        />
      )}
      {tab === "posts" && (
        <DashTemplate
          data={dashBoardPosts}
          titles={postsPage}
          fields={postsFields}
          tabFromUrl={tab}
        />
      )}
    </div>
  );
};

export default DashBoard;
