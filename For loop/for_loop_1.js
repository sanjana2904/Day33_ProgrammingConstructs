//Write a program that takes a command-line argument n and 
// prints a table of the powers of 2 that are less than or equal to 2^n.

let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter (n)th number ",function(n) {    
    for(i = 1; i <= n; i++)
    {
        result = 2 * i;
        console.log("2 x "+ i +" = "+ result)
    }
    process.exit();
});