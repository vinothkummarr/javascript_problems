const prompt=require("prompt-sync")({sigint:true}); 
 
let val = parseInt(prompt("Enter the Value: "));

prod = 1;
function factorial(val){
    for(i=1;i<=val;i++){
        prod *= i;
    }
    return prod;
}
console.log(factorial(val));