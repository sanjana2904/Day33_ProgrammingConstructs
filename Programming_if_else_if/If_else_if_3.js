//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("enter value in unit format 1,10,100,1000 etc  : ", function (value) {
if(value==1)
console.log("unit");
if(value==10)
console.log("Ten");
if(value==100)
console.log("Hundread");
if(value==1000)
console.log("Thousand");
process.exit();
}); 
