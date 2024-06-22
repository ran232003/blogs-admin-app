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
import { useSelector } from "react-redux";

const DashBoard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const user = useSelector((state) => {
    return state.user.user;
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
  console.log(tab);
  return (
    <div className="main-dash">
      <DashboardSidebar user={user} />
      {tab === "dash" || tab === "" ? <DashboardPage /> : null}
      {tab === "profile" && <ProfilePage />}
      {tab === "comments" && (
        <DashTemplate
          data={comments}
          titles={commentPage}
          fields={commentsFields}
        />
      )}
      {tab === "users" && (
        <DashTemplate data={usersData} titles={userPage} fields={usersFields} />
      )}
      {tab === "posts" && (
        <DashTemplate
          data={postsData}
          titles={postsPage}
          fields={postsFields}
        />
      )}
    </div>
  );
};

export default DashBoard;
