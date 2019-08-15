import React, {useState } from "react";
import OperatorButton from "./OperatorButton.js";

//import any components needed
import { operators } from "../../../data.js";

//Import your array data to from the provided data file

// STEP 2 - add the imported data to state.

const Operators = () => {
  const [buttonOperators, setButtonOperators] = useState(operators)
  return (
    <div>
     
      {buttonOperators.map(operator => 
      {return <OperatorButton key={operator} text={operator} />})}
     
    </div>
  );
};

export default Operators;
//console.log('Operators.js -> %cOperators:', 'color: teal', Operators)
