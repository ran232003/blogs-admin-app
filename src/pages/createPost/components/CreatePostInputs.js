import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { apiCall } from "../../../apiCall";
import { CREATE_POST_URL } from "../../../URLS";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postAction } from "../../../store/postSlice";
const CreatePostInputs = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async () => {
    console.log(file, "value   ", value, "category   ", category);
    const payload = {
      file: file,
      category: category,
      text: value,
      title: title,
    };
    try {
      const data = await apiCall("FORMDATA", CREATE_POST_URL, payload);
      if (data.status === "ok") {
        dispatch(postAction.setDashBoardPosts(data.posts));
        navigate("/dashboard?tab=profile");
      }
    } catch (error) {}
  };
  return (
    <div className="main-inputs">
      <Form>
        <div className="title-select">
          <Form.Group className="input-title" controlId="formBasicEmail">
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Title"
            />
          </Form.Group>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            <option value="Java">Java</option>
            <option value="React">React</option>
            <option value="javaScript">javaScript</option>
          </Form.Select>
        </div>
        <Form.Group className="mb-3 file-input" controlId="formFile">
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <ReactQuill
          className="textBox"
          theme="snow"
          value={value}
          onChange={setValue}
        />
        <Button
          onClick={handleSubmit}
          className="publish-button"
          variant="outline-success"
        >
          Publish
        </Button>
      </Form>
    </div>
  );
};

export default CreatePostInputs;
