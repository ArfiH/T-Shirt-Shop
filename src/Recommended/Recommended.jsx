import React from "react";
import Button from "../components/Button";

import "./Recommended.css";
const Recommended = ({handleClick}) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All"/>
          <Button onClickHandler={handleClick} value="Allen Solly" title="Allen Solly"/>
          <Button onClickHandler={handleClick} value="Tommy Hilfiger" title="Tommy Hilfiger"/>
          <Button onClickHandler={handleClick} value="Arrow" title="Arrow"/>
          <Button onClickHandler={handleClick} value="Van Huesen" title="Van Huesen" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
