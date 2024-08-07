import React, { useState } from "react";
import MyDropDown from "./MyDropDown";
import { optionsCategory, optionsSort } from "../../../consts";
import MyInput from "./MyInput";
import { Button } from "react-bootstrap";

const SideBarSearch = (props) => {
  const { getBlogs, inputs, setInputs } = props;

  const handleSubmit = () => {
    console.log("Form submitted with values:", inputs);
    getBlogs();
    // Add your form submission logic here
  };
  const handleInput = (value, field) => {
    setInputs(() => {
      return { ...inputs, [field]: value };
    });
  };
  return (
    <div className="SideBarSearch">
      <div className="search-terms">
        <MyInput
          label="Search"
          field="search"
          handleInput={handleInput}
          value={inputs.search}
        />

        <MyDropDown
          options={optionsSort}
          field="sort"
          label="Sort"
          handleInput={handleInput}
          vlaueInput={inputs.sort}
        />

        <MyDropDown
          options={optionsCategory}
          vlaueInput={inputs.category}
          handleInput={handleInput}
          field="category"
          label="Category"
        />
        <div className="button-container">
          <Button className="submit-button" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBarSearch;
