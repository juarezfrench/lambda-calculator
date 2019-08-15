import React from "react";
import Numbers from "./Numbers"


const NumberButton = (props) => {
  console.log('Props:', props)
  return (

    
      <button className="button">
      {props.text}
    
    </button>
  );
};

export default NumberButton;