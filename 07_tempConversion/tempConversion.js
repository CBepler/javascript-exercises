const convertToCelsius = function(temp) {
  let celcius = (temp - 32) * (5/9);
  celcius = celcius.toFixed(1);
  return +celcius;
};

const convertToFahrenheit = function(temp) {
  let fahreneheit = (temp * (9/5)) + 32
  fahreneheit = fahreneheit.toFixed(1);
  return +fahreneheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
