import React from "react";
// import { comments } from "../../consts";
import "../comments/CommentsPage.css";
import Comment from "../comments/components/Comment";
import TemplateData from "./TemplateData";
const DashTemplate = (props) => {
  const { titles, data, fields, tabFromUrl } = props;
  return (
    <div className="main-comments">
      <div className="comments-div">
        <div className="comments-header">
          {titles.map((title, index) => {
            return (
              <div className="comment-subtitle" key={index}>
                {title}
              </div>
            );
          })}
        </div>
        {data.map((value, index) => (
          <TemplateData
            key={index}
            data={value}
            fields={fields}
            tabFromUrl={tabFromUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default DashTemplate;
