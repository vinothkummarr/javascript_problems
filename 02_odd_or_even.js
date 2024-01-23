const prompt=require("prompt-sync")({sigint:true}); 
 
let num = parseInt(prompt("Enter the Value: "));


function odd_or_even(num){
    if (num%2==0){
        return "Even";
    }  else{
        return "Odd"
    }
}
console.log(odd_or_even(num));