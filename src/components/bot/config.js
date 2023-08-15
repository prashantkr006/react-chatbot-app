// config.js
import { createChatBotMessage } from "react-chatbot-kit";
import GotItButton from "../GotItButton";
import AgeInputWidget from "../AgeInputWidget";
import CountdownComponent from "../CountdownComponent";

const botName = "Student enrollment Bot";
const config = {
  botname: botName,
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}`, { widget: "got_it" }),
  ],
  widgets: [
    {
      widgetName: "got_it",
      widgetFunc: (props) => <GotItButton {...props} />,
    },
    {
      widgetName: "age_input",
      widgetFunc: (props) => <AgeInputWidget {...props} />,
    },
    {
      widgetName: "countdown",
      widgetFunc: (props) => <CountdownComponent {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
