import React, { useState } from "react";

const AdvancedComponent = () => {
  const [isColorSelected, setIsColorSelected] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#4CAF50"); // Default color

  const handleToggle = () => {
    setIsColorSelected(!isColorSelected);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    console.log(color);
  };
  return (
    <div
      className={`color-selector ${isColorSelected ? "selected" : ""}`}
    ></div>
  );
};

export default AdvancedComponent;
