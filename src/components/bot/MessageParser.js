// MessageParser.jsx
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("got it")) {
      actions.handleGotIt();
      return;
    } else if (isNaN(lowerMessage)) {
      actions.handleNameSubmission(message);
    } else {
      actions.handleAgeSubmission(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
