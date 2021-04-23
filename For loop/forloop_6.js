/* Write a program to compute Factors of a number N using prime factorization method.
Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N.*/
  
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter  your number to find the factors of the number: ",function(number) { 

for(let i = 2; i <= number; i++){
    if(number % i == 0){
        let isPrime=1;
        for(j = 2; j <= i/2; j++){
            if(i % j == 0){
                isPrime = 0;
                break;
            }
        }
        if(isPrime == 1){
            console.log(i);
        }
    }
}
process.exit();
});
