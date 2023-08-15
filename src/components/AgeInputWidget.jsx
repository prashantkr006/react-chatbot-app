// AgeInputWidget.jsx
import React, { useState } from "react";

const AgeInputWidget = ({ actions }) => {
  const [selectedAge, setSelectedAge] = useState(18);

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };

  const handleAgeSubmit = () => {
    actions.handleAgeSubmission(selectedAge);
  };

  return (
    <div>
      <select value={selectedAge} onChange={handleAgeChange}>
        {Array.from({ length: 23 }, (_, index) => index + 18).map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
      <button onClick={handleAgeSubmit}>Submit</button>
    </div>
  );
};

export default AgeInputWidget;
