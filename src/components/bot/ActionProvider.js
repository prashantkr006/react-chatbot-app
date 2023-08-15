// ActionProvider.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../../redux/studentSlice";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState({ name: "", age: 0 });
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  const startCountdown = () => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      navigate("/completed");
    }, 5000); // Countdown for 5 seconds
  };

  // Function to update studentData with name
  const updateName = (name) => {
    setStudentData((prevData) => ({
      ...prevData,
      name: name,
    }));
  };

  const handleGotItButtonClick = () => {
    let message = createClientMessage("Got it");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));

    message = createChatBotMessage("Enter your Name");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleGotIt = () => {
    const message = createChatBotMessage("Enter your Name");
    console.log(message);
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleNameSubmission = (name) => {
    const message = createChatBotMessage(`Enter your age`, {
      widget: "age_input",
    });
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
    console.log(name);
    updateName(name);
  };

  const handleAgeSubmission = (age) => {
    const updatedStudentData = { ...studentData, age };
    const message = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit",
      { widget: "countdown" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
    console.log(age);
    console.log(updatedStudentData);
    dispatch(addStudent(updatedStudentData));

    startCountdown();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotItButtonClick,
            handleGotIt,
            handleNameSubmission,
            handleAgeSubmission,
            startCountdown,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
