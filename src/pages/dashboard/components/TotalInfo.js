import React from "react";
import { FaUser, FaComments, FaClipboard } from "react-icons/fa";

const TotalInfo = (props) => {
  const { title, data } = props;
  const getIcon = (title) => {
    switch (title) {
      case "Total Users":
        return <FaUser size={40} />;
      case "Total Comments":
        return <FaComments size={40} />;
      case "Total Posts":
        return <FaClipboard size={40} />;
      default:
        return null;
    }
  };
  return (
    <div className="total-info">
      <div className="info-text">
        <div className="info-title">{title}</div>
        <div className="info-number">{data.length}</div> {/* Dummy number */}
      </div>
      <div className="info-icon">{getIcon(title)}</div>
    </div>
  );
};

export default TotalInfo;
