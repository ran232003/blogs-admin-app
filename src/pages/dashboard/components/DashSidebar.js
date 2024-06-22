import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaUser,
  FaClipboard,
  FaSignOutAlt,
  FaComments,
} from "react-icons/fa"; // Import the icons

const DashSidebar = () => {
  return (
    <div>
      <Sidebar className="sidebar-container">
        <Menu>
          <MenuItem icon={<FaTachometerAlt />}> Dashboard </MenuItem>
          <MenuItem icon={<FaUser />}> Profile </MenuItem>
          <MenuItem icon={<FaClipboard />}> Posts </MenuItem>
          <MenuItem icon={<FaComments />}> Comments </MenuItem>
          <MenuItem icon={<FaSignOutAlt />}> Signout </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default DashSidebar;
