/* Take a number from user and check if the number is a Prime then show
that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also prime */
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter a number ",function(num) {    
 
// Checks if the number is prime or not
function PrimeCheck(num) {
	let number = num;
	let isPrime = true;
	if (number == 1) {
		console.log("1 is neither prime nor composite number.");
		isPrime = false;
	}
	else if (number > 1) {
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				isPrime = false;
				break;
			}
		}
	}
	return isPrime;
}
// Checks if number is palindrome or not
function PalindromCheck(num) {
	let number = num;
	let isPalindrom = true;
	let rem, temp, final = 0;
	temp = num;
	while (number > 0) {
		rem = number % 10;
		number = parseInt(number / 10);
		final = final * 10 + rem;
	}
	if (final != temp) {
		isPalindrom = false;
	}
	return isPalindrom;
}
if (PalindromCheck(num)) {
	if (PrimeCheck(num)) {
		console.log("the Number is palindrom and prime")
	} else
		console.log("the Number is palindrom but not prime")
} else
	console.log("the Number is not palindrom")


    process.exit();
});


