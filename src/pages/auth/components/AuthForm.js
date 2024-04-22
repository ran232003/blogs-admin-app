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
  } = props;
  const handleSubmit = async (values) => {};

  return (
    <div className="auth-form-main">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, dirty, isValid }) => (
          <Form>
            {formikValues.map((inputObject, index) => {
              return (
                <div key={index} className="form-group">
                  <label className="lableClass" htmlFor="title">
                    {inputObject.lable}
                  </label>
                  <Field
                    type="text"
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
              onClick={handleSubmit}
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
