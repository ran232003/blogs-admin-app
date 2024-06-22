import * as Yup from "yup";

export const authInitValues = (status, values) => {
  if (values) {
    return { ...values, password: "" };
  }
  return status === "signin"
    ? { email: "", password: "", userName: "" }
    : { email: "", password: "" };
};

export const getValidationSchema = (status) => {
  switch (status) {
    case "login":
      return Yup.object().shape({
        email: Yup.string()
          .email("not valid email")
          .max(50, "max email violated")
          .min(3, "min email violated")
          .required("email is required"),
        password: Yup.string()
          .min(6, "password to short")
          .max(30, "password to long")
          .required("password Requierd"),
      });
      break;
    case "signin":
      return Yup.object().shape({
        userName: Yup.string()
          .min(4, "userName to short")
          .max(30, "userName to long")
          .required("userName is required"),
        email: Yup.string()
          .email("not valid email")
          .max(50, "max email violated")
          .min(3, "min email violated")
          .required("email is required"),
        password: Yup.string()
          .min(6, "password to short")
          .max(30, "password to long")
          .required("password Requierd"),
      });

      break;
    default:
      return Yup.object().shape({});
      break;
  }
};
