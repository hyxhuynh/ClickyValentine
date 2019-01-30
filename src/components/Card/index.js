import React from "react";
import "./style.css";

function Card({ props, icon, handleClick, dataid }) {
  return (
    <div className="card">
      <div className="card-body" >
        <img className="click-item" data-id={dataid} src={icon} alt="icon" onClick={handleClick}/>
      </div>
    </div>
  );
}

export default Card;
