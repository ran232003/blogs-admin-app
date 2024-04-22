import React, { useEffect, useState } from "react";
import HeadLine from "../../global/HeadLine";
import { Link, useParams } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import "./Auth.css";
import {
  authPageSubTitle,
  formikValuesSingIn,
  formikValuesSingUp,
} from "../../consts";
import { authInitValues, getValidationSchema } from "../../initValuesYup";
const Auth = () => {
  let { status } = useParams();
  const [pageStatus, setPageStatus] = useState(status);
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
          formikValues={
            pageStatus === "signin" ? formikValuesSingUp : formikValuesSingIn
          }
        />
      </div>
    </div>
  );
};

export default Auth;
