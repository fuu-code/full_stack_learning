/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "What is the name of the website?",
    },
  ])
  .then((answers) => {
    const url = `${answers.url}.com`;
    const fileName = `${answers.url}.png`;
    const qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qrGenerated/" + fileName));
    fs.appendFile("qrGenerated/url_log.txt", `${url}\n`, (err) => {
      if (err) throw err;
      console.log("Url save to text!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in this terminal.");
    } else {
      console.log("Something else went wrong:", error);
    }
  });
