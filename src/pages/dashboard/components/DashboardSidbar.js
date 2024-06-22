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

const DashboardSidebar = (props) => {
  const { user } = props;
  return (
    <div>
      <Sidebar className="sidebar-container">
        <Menu>
          {user.type === "admin" && (
            <MenuItem
              component={<Link to="/dashboard?tab=dash" />}
              icon={<FaTachometerAlt />}
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
          {user.type === "admin" && (
            <div>
              <MenuItem
                component={<Link to="/dashboard?tab=posts" />}
                icon={<FaClipboard />}
              >
                {" "}
                Posts{" "}
              </MenuItem>
              <MenuItem
                component={<Link to="/dashboard?tab=comments" />}
                icon={<FaComments />}
              >
                {" "}
                Comments{" "}
              </MenuItem>
              <MenuItem
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
