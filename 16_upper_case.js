const prompt=require("prompt-sync")({sigint:true}); 
 
let stri = prompt("Enter the Value: ");


function upper_case(stri){
    casee = stri.toUpperCase()

    return casee
}
console.log(upper_case(stri));