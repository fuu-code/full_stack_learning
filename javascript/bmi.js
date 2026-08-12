function bmiCalculator(weight, height) {
  var bmiData = Math.round(weight / (height * height));

  if (bmiData < 18.5) {
    return "Your BMI is " + bmiData + ", so you are underweight.";
  }

  if ((bmiData >= 18.5) & (bmiData <= 24.9)) {
    return "Your BMI is " + bmiData + ", so you have a normal weight.";
  }

  if (bmiData > 24) {
    return "Your BMI is " + bmiData + ", so you are overweight.";
  }
}

var bmi = bmiCalculator(78, 1.8);

console.log(bmiCalculator(78, 1.8));
