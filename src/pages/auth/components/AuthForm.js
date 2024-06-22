import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
const AuthForm = (props) => {
  const {
    initialValues,
    formikValues,
    validationSchema,
    setPageStatus,
    buttonTitle,
    authToggle,
    useSubmit,
    pageStatus,
  } = props;
  console.log(initialValues, validationSchema);
  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    props.useSubmit(values);
    resetForm();
  };

  return (
    <div className="auth-form-main">
      <Formik
        key={pageStatus}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, dirty, isValid }) => (
          <Form>
            {formikValues.map((inputObject, index) => {
              // console.log(values, index);
              return (
                <div key={index} className="form-group">
                  <label className="lableClass" htmlFor="title">
                    {inputObject.lable}
                  </label>
                  <Field
                    type={inputObject.type}
                    value={values[inputObject.name]}
                    id={inputObject.name}
                    name={inputObject.name}
                    className="form-control wide-input"
                  />
                  <ErrorMessage
                    name={inputObject.name}
                    component="div"
                    className="text-danger"
                  />
                </div>
              );
            })}
            <Button
              className="submit-btn"
              variant="success"
              type="submit"
              disabled={!isValid || !dirty}
            >
              {buttonTitle}
            </Button>
            {authToggle ? authToggle : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
