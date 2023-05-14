import React from "react";
import { StarFill } from "react-bootstrap-icons";
import "../Styles/ratingSystem.css";
import { nanoid } from "nanoid";

const RatingSystem = ({ stars }) => {
 
  return (
    <>
      {[...Array(stars)].map((id) => {
        return <StarFill key={nanoid()} />;
      })}
    </>
  );
};

export default RatingSystem;
