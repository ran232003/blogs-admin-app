import React, { useEffect, useState } from "react";
import HeadLine from "../../global/HeadLine";
import { useLocation } from "react-router-dom";
import "./PostPage.css";
import { Button } from "react-bootstrap";
import AddComment from "./components/AddComment";
import { useSelector } from "react-redux";
import { apiCall } from "../../apiCall";
import { GET_POST_COMMENTS } from "../../URLS";
import CommentList from "./components/CommentList";
import { useApiHelper } from "../../global/apiHelper";
import { globalActionMapping } from "../../consts";
const PostPage = () => {
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const { handleApiCall } = useApiHelper();

  const postData = location.state.data;
  const user = useSelector((state) => {
    return state.user.user;
  });
  //   const dashBoardComments = useSelector((state) => {
  //     return state.comment.dashBoardComments;
  //   });
  console.log(postData);
  const getPostComments = async () => {
    let url = GET_POST_COMMENTS + postData._id;
    handleApiCall(
      "GET",
      url,
      {},
      (data) => {
        setComments(data.data);
      },
      () => {}
    );
    // try {
    //   const data = await apiCall("GET", url);
    //   if (data.status === "ok") {
    //     console.log(data);
    //     setComments(data.data);
    //   }
    // } catch (error) {}
  };
  useEffect(() => {
    getPostComments();
  }, []);

  return (
    <div className="main-post-page">
      <HeadLine cssClass="create-post-head" title={postData.title} />
      <div className="post-date">
        <span>{new Date(postData.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="category">
        <Button disabled variant="outline-info" className="post-button">
          {postData.category}
        </Button>
      </div>
      <div className="post-image">
        <img className="postImage" src={postData.image} alt="User" />
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></div>
      <AddComment
        postData={postData}
        getPostComments={getPostComments}
        user={user}
      />
      <CommentList
        comments={comments}
        user={user}
        postId={postData._id}
        getPostComments={getPostComments}
      />
    </div>
  );
};

export default PostPage;
