import React, { useState } from "react";
import ChatbotComponent from "./ChatbotComponent";

const Page1 = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const handleEnrollNowClick = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <div>
      <h1>Student enrollment app</h1>
      <button onClick={handleEnrollNowClick}>Enroll Now</button>

      {chatbotVisible && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <ChatbotComponent />
        </div>
      )}
    </div>
  );
};

export default Page1;
