import React from "react";
import "./Title1.css";

const Title1 = ({ tit1, subtit }) => {
  return (
    <div className="section-title1">
      <h2>{tit1}</h2>
      <p>{subtit}</p>
    </div>
  );
};

export default Title1;
