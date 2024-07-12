import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaUser,
  FaClipboard,
  FaSignOutAlt,
  FaComments,
  FaUsers,
} from "react-icons/fa"; // Import the icons
import { Link } from "react-router-dom";
import {
  GET_COMMENTS_DASHBOARD_URL,
  GET_POSTS_DASHBOARD_URL,
  GET_USERS_DASHBOARD_URL,
} from "../../../URLS";
import { apiCall } from "../../../apiCall";
import { useDispatch } from "react-redux";
import { commentAction } from "../../../store/commentSlice";
import { userAction } from "../../../store/userSlice";
import { postAction } from "../../../store/postSlice";
import { actionMapping } from "../../../consts";

const DashboardSidebar = (props) => {
  const dispatch = useDispatch();
  const { user } = props;
  const updateRedux = (data, slice) => {
    const action = actionMapping[slice];
    dispatch(action(data.data));
  };
  const handleClick = async (params) => {
    console.log(params);
    try {
      const data = await apiCall(params.method, params.url);
      if (data.status === "ok") {
        updateRedux(data, params.slice);
      }
    } catch (error) {}
  };
  return (
    <div>
      <Sidebar className="sidebar-container">
        <Menu>
          {user.isAdmin === true && (
            <MenuItem
              component={<Link to="/dashboard?tab=dash" />}
              icon={<FaTachometerAlt />}
              onClick={() => {
                handleClick({});
              }}
            >
              {" "}
              Dashboard{" "}
            </MenuItem>
          )}

          <MenuItem
            component={<Link to="/dashboard?tab=profile" />}
            icon={<FaUser />}
          >
            {" "}
            Profile{" "}
          </MenuItem>
          {user.isAdmin === true && (
            <div>
              <MenuItem
                component={<Link to="/dashboard?tab=posts" />}
                icon={<FaClipboard />}
                onClick={() => {
                  handleClick({
                    url: GET_POSTS_DASHBOARD_URL,
                    method: "GET",
                    slice: "posts",
                  });
                }}
              >
                {" "}
                Posts{" "}
              </MenuItem>
              <MenuItem
                component={<Link to="/dashboard?tab=comments" />}
                icon={<FaComments />}
                onClick={() => {
                  handleClick({
                    url: GET_COMMENTS_DASHBOARD_URL,
                    method: "GET",
                    slice: "comments",
                  });
                }}
              >
                {" "}
                Comments{" "}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClick({
                    url: GET_USERS_DASHBOARD_URL,
                    method: "GET",
                    slice: "users",
                  });
                }}
                component={<Link to="/dashboard?tab=users" />}
                icon={<FaUsers />}
              >
                {" "}
                Users{" "}
              </MenuItem>
            </div>
          )}

          <MenuItem icon={<FaSignOutAlt />}> Signout </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
