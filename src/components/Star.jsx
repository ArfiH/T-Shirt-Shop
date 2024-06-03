import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Star = ({ star }) => {
  let ratings = [
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
  ];
  ratings = ratings.fill(<AiFillStar />, 0, star);

  return ratings;
};

export default Star;
