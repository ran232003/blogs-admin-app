import React from "react";
import profile from "../../profile.png";
import { actionMapping, urlMap } from "../../consts";
import { apiCall } from "../../apiCall";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TemplateData = (props) => {
  const dispatch = useDispatch();

  const { data, fields, cssClass, tabFromUrl } = props;
  const renderFieldData = (fieldData, myField) => {
    if (typeof fieldData === "string" && fieldData.length > 10) {
      return fieldData.split("").map((char, index) => {
        if (index > 0 && index % 14 === 0) {
          return (
            <React.Fragment key={index}>
              {char}
              <br />
            </React.Fragment>
          );
        }
        return <React.Fragment key={index}>{char}</React.Fragment>;
      });
    }
    if (typeof fieldData === "boolean") {
      return <React.Fragment>{fieldData ? "TRUE" : "FALSE"}</React.Fragment>;
    }
    if (myField === "edit") {
      return (
        <React.Fragment>
          <div onClick={handleEdit}>EDIT</div>
        </React.Fragment>
      );
    }
    return <React.Fragment>{fieldData}</React.Fragment>;
  };
  const navigate = useNavigate();

  const handleEdit = (event) => {
    console.log("edit");
    event.stopPropagation();
    navigate(`/create-post`, { state: { data: data } });
  };
  const handleDelete = async (obj) => {
    console.log(obj, "DELETE");
    let url = urlMap[tabFromUrl] + obj._id;
    try {
      const data = await apiCall("DELETE", url);
      if (data.status === "ok") {
        const action = actionMapping[tabFromUrl];
        dispatch(action(data.data));
      }
    } catch (error) {}
    // console.log(url);
  };
  const handleClick = () => {
    console.log("click", tabFromUrl);
    if (tabFromUrl === "posts") {
      navigate(`/posts/${data.title}`, { state: { data: data } });
    }
  };
  return (
    <div className={"comment-row" + " " + tabFromUrl} onClick={handleClick}>
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
              renderFieldData(data[field], field)
            )}
          </div>
        );
      })}
      <div
        onClick={(event) => {
          event.stopPropagation();
          handleDelete(data);
        }}
        className="comment-data delete"
      >
        DELETE
      </div>
    </div>
  );
};

export default TemplateData;
