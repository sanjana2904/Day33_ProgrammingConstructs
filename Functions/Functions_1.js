/* Help user find degF or degC based on their Conversion Selection. Use
Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9  */

const readline = require('readline-sync');
console.log("ensure that the inputs are within the Freezing Point" +
    "(0 °C / 32 °F) and the Boiling Point of Water (100 °C / 212 °F)");
let temp_str = readline.questionInt("Enter temperature: ");
let temp = parseInt(temp_str);
// Converts farenheits to degree centigrades temperature
function farenheitToDegreeCentigrade(temp) {
	if (temp < 32 || temp > 212) {
		console.log("Invalid input!");
		return;
	}
	console.log("temp is degC is: " + ((temp - 32) * (5 / 9)));
}
// Converts centigrades to farenheits temperature
function centigradeToDegreeFarenheit(temp) {
	if (temp < 0 || temp > 100) {
		console.log("Invalid input!");
		return;
	}
	console.log("temp in degF is: " + ((temp * 9 / 5) + 32));
}
console.log("Enter y for F-C\n"+"Enter n for C-F");
if (readline.keyInYN("Enter your key:")) {
	farenheitToDegreeCentigrade(temp);
} else{
	centigradeToDegreeFarenheit(temp);
}