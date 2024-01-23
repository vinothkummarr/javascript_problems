const prompt=require("prompt-sync")({sigint:true}); 
 
let base = prompt("Enter the Base Value: ");
let height = prompt("Enter the Height Value: ")

function tri_area(base,height){
    
    area = 0.5 * (base*height)
    return area
}
console.log(tri_area(base,height));