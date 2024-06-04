import React from "react";
import "./Availability.css";
import Input from "../../components/Input";

const Availability = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Availability</h2>
      <div>
        <Input 
          handleChange={handleChange}
          value="" title="All"
          name="test5" />

        <Input
          handleChange={handleChange}
          value="instock"
          title="In stock"
          name="test5"
        />
        <Input
          handleChange={handleChange}
          value="outofstock"
          title="Out Of Stock"
          name="test5"
        />
      </div>
    </div>
  );
};

export default Availability;
