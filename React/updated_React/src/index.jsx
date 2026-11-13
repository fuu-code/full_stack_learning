
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDOM from "react-dom/client";


//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

ReactDOM.createRoot(document.getElementById("intro")).render(
  <div>
  <h1>Hello World!</h1>
  <h2>MY FAVOURITE FOOD</h2>
  <ul>
    <li>Bacon</li>
    <li>Jamon</li>
    <li>Noodles</li>
  </ul>
</div>
);


// Javascript expression to React

const fName = "Ya";
const lName = "Yo"
const num = 7;

ReactDOM.createRoot(document.getElementById("expression")).render(
<div>
  <h1>Hello {fName + " " + lName} | {fName} {lName} | {`${fName} ${lName}`}!</h1>
  <p>Your lucky number is {num}!</p>
  <p>This number is random {Math.floor(Math.random() * 10 + 1)}!</p>
</div>
);


const currentYear = new Date().getFullYear();
const name = "CoderCraze"

ReactDOM.createRoot(document.getElementById('code_chall')).render(
  <div>
    <h1>HELLO WORLD</h1>
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>
);

