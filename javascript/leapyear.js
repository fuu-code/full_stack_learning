function isLeap(year) {
  /**************Don't change the code above****************/
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
  /**************Don't change the code below****************/
}

function isLeapTwo(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap Year";
      } else {
        return "Not Leap Year";
      }
    } else {
      return "Leap Year";
    }
  } else {
    return "Not Lear Year";
  }
}

var year = 1234;

console.log("Shorten Code: " + isLeap(year));
console.log("Long Code: " + isLeapTwo(year));
