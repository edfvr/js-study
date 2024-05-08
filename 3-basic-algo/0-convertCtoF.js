/**
 * Converts from a Celsius value to Fahrenheit.
 * @param {number} celsius The value in Celsius
 * @returns The value of celsius in fahrenheit.
 */
function convertCtoF(celsius) {
   return celsius * 9 / 5 + 32;
}
  
console.log(convertCtoF(-10));