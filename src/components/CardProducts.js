import React from "react";

const CardProducts = (props) => {
  console.log(props);
  const { id, title, content, imgUrl, view } = props.artwork;
  return (
    <div className="col-md-4" style={{ marginBottom: "50px" }}>
      <img src={process.env.PUBLIC_URL + "/" + imgUrl} width="80%" alt={title} />
      <h5 style={{ marginTop: "10px" }}>{title}</h5>
      <p style={{ textAlign: "left" }}>{content}</p>
      <span>{view}</span>
    </div>
  );
};

export default CardProducts;
