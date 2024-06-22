import React, { useState } from "react";
import { Form } from "react-bootstrap";
const MyDropDown = (props) => {
  const { label, options, field, handleInput, vlaueInput } = props;
  const handleChange = (event) => {
    handleInput(event.target.value, field);
    console.log(`Selected category: ${event.target.value}`);
    // You can trigger any other function here as well
  };
  return (
    <div className="dropdown-container">
      <Form.Group controlId={field} className="dropdown-group">
        <Form.Label className="dropdown-label">{label}</Form.Label>
        <div className="dropdown-wrapper">
          <Form.Control
            as="select"
            value={vlaueInput}
            onChange={handleChange}
            className="dropdown-control"
          >
            <option value="" disabled>
              Choose {label}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Control>
        </div>
      </Form.Group>
    </div>
  );
};

export default MyDropDown;
