import React from "react";
import { Form } from "react-bootstrap";

const MyInput = (props) => {
  const { label, field, value, handleInput } = props;

  const handleChange = (event) => {
    handleInput(event.target.value, field);
  };

  return (
    <div className="input-container">
      <Form.Group controlId={field} className="input-group">
        <Form.Label className="input-label">{label}</Form.Label>
        <div className="input-wrapper">
          <Form.Control
            type="text"
            value={value}
            onChange={handleChange}
            className="input-control"
            maxLength="20"
          />
        </div>
      </Form.Group>
    </div>
  );
};

export default MyInput;
