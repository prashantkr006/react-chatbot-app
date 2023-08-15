import React, { useState } from "react";

const GotItButton = ({ actions }) => {
  const [bgColour, setBgColour] = useState("#FFFFFF");
  const [color, setColor] = useState("#5ccc9d");

  const buttonStyles = {
    backgroundColor: bgColour,
    color: color,
    border: `2px solid ${color}`,
    borderRadius: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
  };

  const handleClick = () => {
    actions.handleGotItButtonClick();
  };

  return (
    <button
      style={buttonStyles}
      onClick={handleClick}
      onMouseEnter={() => {
        setBgColour("#5ccc9d");
        setColor("#FFFFFF");
      }}
      onMouseLeave={() => {
        setBgColour("#FFFFFF");
        setColor("#5ccc9d");
      }}
    >
      Got It
    </button>
  );
};

export default GotItButton;
