const prompt=require("prompt-sync")({sigint:true}); 
 
let a = parseInt(prompt("Enter First Value: "));
let b = parseInt(prompt('Enter Second Value: '));

function add(a,b){
    return a+b;
}
console.log(add(a,b));