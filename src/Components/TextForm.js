import React, { useState } from "react";
import PropTypes from "prop-types";
import TextSummary from "./TextSummary";

export default function TextForm(props) {
  const toUpper = () => {
    if(text===""){
      props.showAlert("warning","Write something!");  
    }
    else{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("success","Converted to upper case!");
    }
  };

  const toLower = () => {
    if(text===""){
      props.showAlert("warning","Write something!");  
    }
    else{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("success","Converted to lower case!");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    // here event.target.value is used to append the new entered text with the existing text in the text area
  };

  const handleClear = () => {
    if(text===""){
      props.showAlert("warning","Write something to clear!");  
    }
    else{
      setText("");
      props.showAlert("success","Text cleared!");
    }
  };

  const handleDownload = () => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", "sample.txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    if(text===""){
      props.showAlert("warning","Empty file download started!");  
    }
    else{
      props.showAlert("success","Download started!");
    }
  };
  
  const [text, setText] = useState("");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          placeholder="Enter Text Here"
          style={props.boxStyle}
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button
        type="button"
        className={`btn btn-${props.btnColor} mx-1 my-2`}
        onClick={toUpper}
      >
        Upper Case
      </button>
      <button
        type="button"
        className={`btn btn-${props.btnColor} mx-1 my-2`}
        onClick={toLower}
      >
        Lower Case
      </button>
      <button
        type="button"
        className={`btn btn-${props.btnColor} mx-1 my-2`}
        onClick={handleClear}
      >
        Clear
      </button>
      <button
        type="button"
        className={`btn btn-${props.btnColor} mx-1 my-2`}
        onClick={handleDownload}
      >
        Download
      </button>
      <TextSummary inpText={text} />
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter Text",
};
