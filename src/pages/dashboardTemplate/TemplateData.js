import React from "react";
import profile from "../../profile.png";

const TemplateData = (props) => {
  const { data, fields, cssClass } = props;
  console.log(data, fields);
  return (
    <div className="comment-row">
      {fields.map((field, index) => {
        const isEditField = field.toLowerCase() === "edit";
        return (
          <div
            key={index}
            className={`comment-data ${isEditField ? "edit-field" : ""}`}
          >
            {field.toLowerCase().includes("image") ? (
              <img
                src={data[field] ? data[field] : profile}
                alt="User"
                className="user-image"
                onError={(e) => {
                  e.target.src = profile;
                }}
              />
            ) : (
              data[field]
            )}
          </div>
        );
      })}
      <div className="comment-data delete">DELETE</div>
    </div>
  );
};

export default TemplateData;
