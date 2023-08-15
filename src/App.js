// App.js
import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Page1 from "./components/Page1"; // Import your Page1 component
import Page3 from "./components/Page3"; // Import your completed component
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/completed" element={<Page3 />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
