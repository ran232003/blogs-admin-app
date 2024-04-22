import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import "./global.css";
import profilePic from "./profile.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavigationBar = () => {
  const user = useSelector((state) => {
    return state.user.user;
  });
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          StepBack Blogs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>
          </Nav>
          {user ? (
            <NavDropdown
              className="nav-profile d-flex"
              title={
                <img
                  src={profilePic}
                  alt="Profile"
                  style={{ width: "40px", borderRadius: "50%" }}
                />
              } // Render profile picture as the titl
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Sign Out</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav className="" style={{ maxHeight: "100px" }} navbarScroll>
              <Button
                as={Link}
                to={"/auth/signin"}
                variant="outline-success nav-profile"
              >
                {" "}
                Sign In
              </Button>
            </Nav>
          )}

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
