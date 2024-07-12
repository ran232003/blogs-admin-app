import React from "react";
import TotalInfo from "./TotalInfo";
import RecentInfo from "./RecentInfo";
import { recentComments, recentUsers } from "../../../consts";

const DashboardPage = (props) => {
  const { dashBoardPosts, dashBoardComments, dashBoardUsers } = props;
  return (
    <div className="dashboard-content">
      <div className="total-info-container">
        <TotalInfo title="Total Users" data={dashBoardUsers} />
        <TotalInfo title="Total Comments" data={dashBoardComments} />
        <TotalInfo title="Total Posts" data={dashBoardPosts} />
      </div>
      <div className="rectangles-container">
        <RecentInfo
          divClass="rectangle"
          title="Recent Users"
          leftSubTitle="userImage"
          rightSubTitle="userName"
          list={dashBoardUsers}
        />
        <RecentInfo
          divClass="rectangle2"
          title="Recent Comments"
          leftSubTitle="Comment"
          rightSubTitle="Likes"
          list={dashBoardComments}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
