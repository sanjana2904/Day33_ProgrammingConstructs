//Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year.
//                        A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter year",function(year) {
   let y = year%4;
   let r = year%100;
   let t = year%400;
   if((y == 0 && r != 0) || t==0)
   console.log("leap year")
   else
   console.log("not a leap year") 
    process.exit();
});