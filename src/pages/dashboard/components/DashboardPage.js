import React from "react";
import TotalInfo from "./TotalInfo";
import RecentInfo from "./RecentInfo";
import { recentComments, recentUsers } from "../../../consts";

const DashboardPage = () => {
  return (
    <div className="dashboard-content">
      <div className="total-info-container">
        <TotalInfo title="Total Users" />
        <TotalInfo title="Total Comments" />
        <TotalInfo title="Total Posts" />
      </div>
      <div className="rectangles-container">
        <RecentInfo
          divClass="rectangle"
          title="Recent Users"
          leftSubTitle="userImage"
          rightSubTitle="userName"
          list={recentUsers}
        />
        <RecentInfo
          divClass="rectangle2"
          title="Recent Comments"
          leftSubTitle="Comment"
          rightSubTitle="Likes"
          list={recentComments}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
