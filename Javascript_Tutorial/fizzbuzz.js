var output = [];
var count = 1;

function whileFizzBuzz() {
  while (count <= 100) {
    if (count % 5 === 0 && count % 3 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count = count + 1;
  }

  console.log(output);
}

var outputFor = [];

function forLoopFizzBuzz() {
  for (var countFor = 1; countFor < 101; countFor++) {
    if (countFor % 5 === 0 && countFor % 3 === 0) {
      outputFor.push("FizzBuzz");
    } else if (countFor % 3 === 0) {
      outputFor.push("Fizz");
    } else if (countFor % 5 === 0) {
      outputFor.push("Buzz");
    } else {
      outputFor.push(countFor);
    }
  }

  console.log(outputFor);
}

forLoopFizzBuzz();
// whileFizzBuzz();
