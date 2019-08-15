import React from "react";
import './Operators'




const OperatorButton = (props) => {
console.log('OperatorButton.js -> %cprops:', 'color: violet', props)
 
  return (
    
   
      <button className="button, operator-button"> 
     
      {props.text.char}
      {console.log('OperatorButton.js -> %c {props.char}:', 'color: indigo',  props.char)}
      </button>
    
  );
};

export default OperatorButton;
