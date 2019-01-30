import React from "react";
import "./style.css";

function Nav({score, topScore}) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand"><a href="/">Home</a></li>
        <li>Click an image to begin</li>
        <li>Score {score} | Top Score {topScore}</li>
      </ul>
    </nav>
  )
}

export default Nav;