import React, { useState } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Gender from "./Gender/Gender";
import Availability from "./Availability/Availability";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>
      <section className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <div className="logo-container">
          T-Shirt shop
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        <Gender handleChange={handleChange} />
        <Availability handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
