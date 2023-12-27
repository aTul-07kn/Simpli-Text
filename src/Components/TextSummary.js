import React from 'react'

export default function TextSummary(props) {
  let text=props.inpText;
  let words=text.trim().split(" ").length;
  if(text===""){
    words=0;
  }
  let chars=text.length;
  let timeToRead=0.008*words;
  return (
    <div>
        <h2>Text Summary</h2>
        <h5>No. of words: {words}</h5>
        <h5>No. of characters: {chars}</h5>
        <h5>Time to read the text: {timeToRead} minutes</h5>
        <h2>Text Preview</h2>
        <p>{text}</p>
    </div>
  )
}
