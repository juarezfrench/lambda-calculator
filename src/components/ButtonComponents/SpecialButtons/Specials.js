import React, {useState} from "react";
import SpecialButton from "./SpecialButton";

//import any components needed
import { specials } from "../../../data.js";

//Import your array data to from the provided data file

// STEP 2 - add the imported data to state.

const Specials = () => {

  const [buttonSpecials, setbuttonSpecials] = useState(specials)

  return (
 
    <div>
      {/* { STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       P needed by the child component } */}
    
       {buttonSpecials.map(special =>
        {return <SpecialButton key = {specials} text = {special}/>})}
      {/* { console.log('Specials.js -> %cspecials:', 'color:darkslateblue', specials)} */}
      

     
     
    </div>
  );
};

export default Specials;
// console.log('specials.js -> %cSpecials:', 'color: teal', specials)
