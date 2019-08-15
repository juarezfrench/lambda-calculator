
import React from "react"


const Display = (props) => {
console.log('Display.js -> %cprops:', 'color: aqua', props, props.number)


  return <div className='display'>
  {/* {Display any props here} */}
  {props.number}
  </div>;
};   

export default Display