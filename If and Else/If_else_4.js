//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
let chance = Math.floor(Math.random() * 10) %2 +1;
if(chance == 1)
console.log("Heads")
else
console.log("Tails")