import React from "react";
import logo from "../../../profile.png";
const RecentInfo = (props) => {
  const { title, leftSubTitle, rightSubTitle, list, divClass } = props;
  return (
    <div className={divClass}>
      <div className="rectangle-header">
        <div className="rectangle-title">{title}</div>
        <button className="rectangle-button">Button 1</button>
      </div>
      <div className="rectangle-subheader">
        <div className="rectangle-left-subtitle">{leftSubTitle}</div>
        <div className="rectangle-right-subtitle">{rightSubTitle}</div>
      </div>
      <div className="rectangle-content">
        {list.map((item, index) => (
          <div key={index} className="rectangle-list-item">
            <div className="rectangle-left-item">
              {leftSubTitle === "userImage" ? (
                <img
                  className="user-image"
                  src={item.userImage ? item.userImage : logo}
                  alt="User"
                />
              ) : (
                <div>
                  {item.comment
                    ? item.comment.length > 60
                      ? item.comment.substring(0, 59)
                      : item.comment
                    : "No Comment"}
                </div>
              )}
            </div>
            <div className="rectangle-right-item">
              {rightSubTitle === "Likes" ? (
                <div>{item.likes}</div>
              ) : (
                <div>{item.userName}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInfo;
