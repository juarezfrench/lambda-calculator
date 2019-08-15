// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.


import React from "react";
//console.log('data.js -> %cReact:', 'color: red', React)


export const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

export const operators = [
  {
    char: "/",
    value: "/"
  },
  {
    char: "x",
    value: "*"
  },
  {
    char: "-",
    value: "-"
  },
  {
    char: "+",
    value: "+"
  },
  {
    char: "=",
    value: "==="
  }
];

export const specials = ["C", "+/-", "%"];

export const add = (x, y) => {
  return x + y;
};

export const subtract = (x, y) => {
  return x - y;
};

// export const clear = (x, y) => {
//   setTotal(0);
// };

export const percent = (x, y) => {
  return x/100;
};


