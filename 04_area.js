const prompt=require("prompt-sync")({sigint:true}); 

const lst =[] 
let l = parseInt(prompt("Enter Length Value: "));
let b = parseInt(prompt('Enter Breadth Value: '));


function area(l,b){
    return ("The Area of the Triangle is: " + l*b)
}
console.log(area(l,b));