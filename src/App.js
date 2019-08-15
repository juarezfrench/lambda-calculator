import React, { useState } from "react";
import {render} from "react-dom";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Numbers  from "./components/ButtonComponents/NumberButtons/Numbers";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display.js";
import "./App.css";


// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components

function App() {
const [display, setDisplay] = useState(0);

  return (
    <div className="container">
      {/* <div className="top"> */}
      <Logo />
      {/* <Display display={display} />
      </div> */}
      <div className="App">
        <Display number={0} />
        <Numbers />
        <Operators />
        <Specials />
      
      </div>
    </div>
  );
}
render(<App />, document.getElementById("root"));

export default App;