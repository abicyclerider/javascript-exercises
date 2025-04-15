const convertToCelsius = function(degreeFarenheit) {
  let degreeCelcius = (degreeFarenheit - 32)*(5/9);
  return Math.round(degreeCelcius*10)/10; 
};

const convertToFahrenheit = function(degreeCelcius) {
  let degreeFarenheit =  degreeCelcius*(9/5) + 32;
  return Math.round(degreeFarenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
