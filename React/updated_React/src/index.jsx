
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
    <li>Sisig</li>
    <li>Chicken</li>
    <li>Chopsuey</li>
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

ReactDOM.createRoot(document.getElementById('code-chall')).render(
  <div>
    <h1 contentEditable="true">HELLO WORLD</h1>
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>
);

// https://www.w3schools.com/tags/ref_standardattributes.asp
// add html attribute inside JSX
// Class-based style 
const chicken = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6isxcnfsbp_tTWrh-SL37yJlFCYmfowOI8gPx3RGCzA&s=10"
const chopsuey = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59EciSbqBP-XBYRRIrn1cGtWStJtYXhKsxAAI_yRSHQ&s=10"

ReactDOM.createRoot(document.getElementById("style")).render(
  <div>
  <h1 className="heading">Hello World!</h1>
  <h2>MY FAVOURITE FOOD</h2>
  <ul>
    <li contentEditable="true">Sisig</li>
    <li contentEditable="true">Chicken</li>
    <li contentEditable="true">Chopsuey</li>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OE72V9V_vt4i3-F9UvsRXErvNZSPHsnlXQeK_mW4bw&s=10" alt="pork chops fried"></img>
    <img src={chicken} alt="chicken wings"/>
    <img src={chopsuey} alt="veggies fried"></img>
  </ul>
</div>
);


// Inline-based Styling in JSX
// https://www.w3schools.com/cssref/index.php
const customStyle ={
  color: "brown",
  fontSize: "30px",
  border: "1px solid black",
  width: "200px"
}
customStyle.color = "green"

ReactDOM.createRoot(document.getElementById("inline-style")).render(
  <div>
    <h1 style={{color: "blue"}}>Hello World</h1>
    <h1 style={customStyle}>Hello World</h1>
  </div>
)


// Challenge updating Heading based on time

let timeNow = new Date().getHours();
// timeNow = 10

let hour = ""
const colorHour = {
  color: ""
}

if (timeNow < 12) {
  hour = "Good Morning",
  colorHour.color = "red"
} else if (timeNow < 18) {
  hour = "Good Afternoon",
  colorHour.color = "green"
} else {
  hour = "Good Evening",
  colorHour.color = "blue"
}


ReactDOM.createRoot(document.getElementById("time-change")).render(
  <div>
    <p>This is a code challenge where the H1 change based on the hour</p>
    <h1 style={colorHour}> {hour}</h1>
  </div>
)

