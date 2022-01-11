import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  //Using this to convert into UPPER CASE
  const handleUpCase = () => {
    // console.log("Upeercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoCase = () => {
    // console.log("Upeercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  //Using this we can write text into text area
  const handleOnChange = (event) => {
    // console.log("on chage get clicked");
    setText(event.target.value);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode == "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode == "dark" ? "grey" : "white",
              color: props.mode == "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCase}>
          Capitalize your text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoCase}>
          Smaller your text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear your text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy your text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove extra spaces
        </button>
      </div>

      <div
        className="container my-2"
        style={{
          color: props.mode == "dark" ? "white" : "black",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} time to read it.</p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview here"}
        </p>
      </div>
    </>
  );
}
