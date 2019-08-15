import React from "react";
import "./Specials";
// console.log('SpecialButton.js -> %cSpecials:', 'color: red', Specials)




const SpecialButton =(props) => {
console.log('SpecialButton.js -> %cprops:', 'color: magenta', props)

  return (
    <button className ="button,specials-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.text}
   {   console.log('SpecialButton.js -> %c {props.text.text}:', 'color: SlateBlue',  {props})}
      
    </button>

  );
};

export default SpecialButton;
