import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Form as BootstrapForm,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import profile from "../../profile.png"; // Use the correct path to your profile image
import { useSelector } from "react-redux";
import { apiCall } from "../../apiCall";
import { UPDATE_USER_URL } from "../../URLS";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(profile);
  const [imageFile, setImageFile] = useState(null); // To hold the image file

  const user = useSelector((state) => {
    return state.user.user;
  });
  const initialValues = {
    username: user.username || "",
    email: user.email || "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values) => {
    console.log("Form data", values, profileImage);
    let payload = { ...values };
    if (imageFile) {
      payload = { ...payload, file: imageFile };
    }
    const data = await apiCall("FORMDATA", UPDATE_USER_URL, payload);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file); // Save the file to the state

      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className="profile-page">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center">Profile</h1>
          <div className="text-center">
            <label htmlFor="profile-image-upload">
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image mb-4"
                width="150" // Ensure consistent width
                height="150" // Ensure consistent height
              />
            </label>
            <input
              id="profile-image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form as={BootstrapForm} className="profile-form">
                <BootstrapForm.Group controlId="username">
                  <BootstrapForm.Label>Username</BootstrapForm.Label>
                  <Field
                    as={BootstrapForm.Control}
                    type="text"
                    name="username"
                    isInvalid={
                      !!formik.errors.username && formik.touched.username
                    }
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="email">
                  <BootstrapForm.Label>Email</BootstrapForm.Label>
                  <Field
                    as={BootstrapForm.Control}
                    type="email"
                    name="email"
                    isInvalid={!!formik.errors.email && formik.touched.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="password">
                  <BootstrapForm.Label>Password</BootstrapForm.Label>
                  <Field
                    as={BootstrapForm.Control}
                    type="password"
                    name="password"
                    isInvalid={
                      !!formik.errors.password && formik.touched.password
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <div className="text-center mt-3">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={!formik.isValid}
                  >
                    Update
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
