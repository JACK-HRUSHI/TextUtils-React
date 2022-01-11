import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, { useState } from "react";
//In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import
//From This: import { Switch } from "react-router-dom";
//To This: import { Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      // document.title = "TextUtils - DarkMode";
      showAlert("Dark mode has been enabled", "dark");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.title = "TextUtils - LightMode";
      showAlert("Light mode has been enabled", "info");
    }
  };

  return (
    <>
      {/* <Router> */}

      <Navbar
        title="TextUtils"
        // option="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter your text below" mode={mode} />
        {/* <Routes> */}
        {/* There is some changes here also */}
        {/* You also need to update the Route declaration as follow */}
        {/* <Route path='/welcome' element={<Home/>} /> */}

        {/* <Route
              path="/"
              element={<TextForm heading="Enter your text below" mode={mode} />}
            />
            <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
