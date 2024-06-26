import React from "react";
import "./Price.css";
import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <Input
           handleChange={handleChange}
           value = ""
           title = "All"
           name = "test2"
        />

      <Input
        handleChange={handleChange}
        value={50}
        title="$1 - $50"
        name = "test2" 
      />
       <Input
        handleChange={handleChange}
        value={100}
        title="$51 - $100"
        name = "test2" 
      />
       <Input
        handleChange={handleChange}
        value={150}
        title="$101 - $150"
        name = "test2" 
      />
       <Input
        handleChange={handleChange}
        value={200}
        title="Over $151"
        name = "test2" 
      />
    </div>
  );
};

export default Price;
