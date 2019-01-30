import React from "react";
import "./style.css";

function Nav({score, topScore}) {
  return (
    <nav className="navbar">
      <ul>
        {/* Maybe a logo can be added here */}
        {/* <li className="brand"><a href="/">Home</a></li> */}
        <li>Click an image to begin</li>
        <li>Score {score} | Top Score {topScore}</li>
      </ul>
    </nav>
  )
}

export default Nav;