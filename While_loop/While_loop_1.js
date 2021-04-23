/*Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached.*/
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter your number",function(number) {    
    let i=0;
while(i<number){
    let power=2**i;
    i++;
    console.log("2 ^ "+ i +" = "+power);
    if(power==256){
        break;
    }
}
    process.exit();
});