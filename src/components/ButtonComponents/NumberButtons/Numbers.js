//import React from "react";
import  React,{ useState } from "react";
import NumberButton from "./NumberButton";


//import any components needed
import { numbers } from "../../../data";
// console.log('Numbers.js -> %cnumbers:', 'color: blue', numbers)

//Import your array data to from the provided data file

// STEP 2 - add the imported data to state.
const Numbers = () => {
const [buttonNumbers, setbuttonNumbers] = useState(numbers)
// console.log('Numbers.js -> %cnumbers:', 'color: firebrick', numbers)

  

  return (
    <div>
        {buttonNumbers.map(number => 
        {return <NumberButton key={number} text={number}/>})}
       

    </div>
  );
};

export default Numbers;
//console.log('Numbers.js -> %cNumbers:', 'color: teal', Numbers)
