//    Write a program that takes day and month from the command line and prints 
//true if day of month is between March 20 and June 20, false otherwise.
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter month date",function(month, date) {    
    if((month == "3" && date >= "20") || (month == "6" && date <= "20")) 
        console.log("True")
    else if (month > "3" && month < "6") 
        console.log("True")
    else
    console.log("False")
    process.exit();
});