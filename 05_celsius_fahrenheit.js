const prompt=require("prompt-sync")({sigint:true}); 
 
let celsius = parseInt(prompt("Enter the Value: "));


function celsius_fahrenheit(celsius){
    f = (celsius *1.8) +32
    return f
}
console.log(celsius_fahrenheit(celsius));