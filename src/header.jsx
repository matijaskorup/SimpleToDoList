import React from "react";
import "./styles/header.styles.css";

function Header() {
  const newTime = new Date().toLocaleDateString();
  return (
    <div className="header">
      <div>
        <span>A SIMPLE TO DO LIST:</span>
      </div>
      <div className="date">
        <span>{newTime}</span>
      </div>
    </div>
  );
}

export default Header;
