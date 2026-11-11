// var React = require("react");
// var ReactDOM = required("react-dom")

import React from "react";
import ReactDOM from "react-dom";


//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

ReactDOM.render(
<div>
  <h1>Hello World!</h1>
  <h2>MY FAVOURITE FOOD</h2>
  <ul>
    <li>Bacon</li>
    <li>Jamon</li>
    <li>Noodles</li>
  </ul>
</div>
, document.getElementById("root")
)
