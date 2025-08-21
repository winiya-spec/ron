import React from "react";
import "./Title.css";

const Title = ({ tit, subtit }) => {
  return (
    <div className="section-title">
      <h2>{tit}</h2>
      <p>{subtit}</p>
    </div>
  );
};

export default Title;
