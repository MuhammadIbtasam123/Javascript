// **************** Question 1 ****************
// converts temperature from celsius to fahrenheit and vice versa.

// 1- Using switch , template literals and alert.

let temperatureValue = parseFloat(prompt("Enter temperature"));
let temperatureUnit = prompt("Enter Temperature Unit (C/F)").toLowerCase();

switch (temperatureUnit) {
  case "c":
    let fahrenheit = (temperatureValue * 9) / 5 + 32;
    alert(
      `Temperature ${temperatureValue}'C converted to ${fahrenheit.toFixed(
        1
      )}'F`
    );
    break;
  case "f":
    let celsius = ((temperatureValue - 32) * 5) / 9;
    alert(
      `Temperature ${temperatureValue}'F converted to ${celsius.toFixed(1)}'C`
    );
    break;
  default:
    alert("Invalid unit entered. Please enter 'C' or 'F'.");
}

// 2- Using if..else , template literals and alert.
{
  let temperatureValue = parseFloat(prompt("Enter temperature"));
  let temperatureUnit = prompt("Enter Temperature Unit (C/F)").toLowerCase();
  if (temperatureUnit === "c") {
    let fahrenheit = (temperatureValue * 9) / 5 + 32;
    alert(
      `Temperature ${temperatureValue}'C converted to ${fahrenheit.toFixed(
        1
      )}'F`
    );
  } else if (temperatureUnit === "f") {
    let celsius = ((temperatureValue - 32) * 5) / 9;
    alert(
      `Temperature ${temperatureValue}'F converted to ${celsius.toFixed(1)}'C`
    );
  } else {
    alert("Invalid unit entered. Please enter 'C' or 'F'.");
  }
}
