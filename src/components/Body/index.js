import React from "react";
import Card from "../Card";
import "./style.css";

function Body( { itemList, handleItemSelected } ) {
  return (
    <div className="container">
      {itemList.map( (obj, i) => {
        return <Card key={i} dataid={obj.key} icon={obj.icon} handleClick={handleItemSelected}></Card>
      })}
    </div>
  )
}

export default Body;
