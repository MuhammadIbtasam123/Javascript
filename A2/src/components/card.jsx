import React from "react";
import "./style.css"; // Import the CSS file for styling

const Card = (props) => {
  const { img, name, price, isSold } = props.data;

  return (
    <div className="card">
      <img src={img} alt={name} className="card-img" />
      {isSold && <div className="sold-badge">Sold</div>}{" "}
      <div className="card-details">
        <h2 className="card-name">{name}</h2>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
