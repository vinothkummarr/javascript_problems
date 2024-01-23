const prompt=require("prompt-sync")({sigint:true}); 
 
let string = prompt("Enter the Value: ");


function string_reverse(string){
    split = string.split('').reverse().join("")
    //reverse = split.reverse().join("")
    return split;
}
console.log(string_reverse(string));