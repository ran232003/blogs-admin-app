import React, { useEffect, useState } from "react";
import HeadLine from "../../global/HeadLine";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import "./Auth.css";
import {
  authPageSubTitle,
  formikValuesSingIn,
  formikValuesSingUp,
} from "../../consts";
import { authInitValues, getValidationSchema } from "../../initValuesYup";
import { apiCall } from "../../apiCall";
import { AUTH_URL } from "../../URLS";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/userSlice";
const Auth = () => {
  let { status } = useParams();
  const dispatch = useDispatch();
  const [pageStatus, setPageStatus] = useState(status);
  const navigate = useNavigate();
  const handleClick = () => {
    setPageStatus(pageStatus === "login" ? "signin" : "login");
  };
  const authToggle =
    pageStatus === "signin" ? (
      <div>
        Go To{" "}
        <Link onClick={handleClick} to="/auth/login">
          Login
        </Link>
      </div>
    ) : (
      <div>
        Go To{" "}
        <Link onClick={handleClick} to="/auth/signin">
          Sign In
        </Link>
      </div>
    );
  const initValues = authInitValues(status);
  const validationSchema = getValidationSchema(status);
  console.log(initValues, validationSchema);
  const handleSubmit = async (values) => {
    let apiUrlStatus = pageStatus === "login" ? "login" : "signup";
    const data = await apiCall("POST", AUTH_URL + apiUrlStatus, values);
    console.log(data);
    if (data.status === "ok") {
      dispatch(userAction.setUser(data.user));
      navigate("/");
    }
  };
  return (
    <div className="auth-main">
      <div className="auth-container">
        <HeadLine
          cssClass="auth-page"
          subTitle={authPageSubTitle}
          title="Step Back Blogs"
          subTitleClass="auth-sub-title"
          titleClass="auth-title"
        />
        <AuthForm
          setPageStatus={setPageStatus}
          authToggle={authToggle}
          validationSchema={validationSchema}
          initialValues={initValues}
          buttonTitle={pageStatus}
          pageStatus={pageStatus}
          useSubmit={handleSubmit}
          formikValues={
            pageStatus === "signin" ? formikValuesSingUp : formikValuesSingIn
          }
        />
      </div>
    </div>
  );
};

export default Auth;
