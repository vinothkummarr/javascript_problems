const prompt=require("prompt-sync")({sigint:true}); 

const lst =[] 
let a = parseInt(prompt("Enter First Value: "));
let b = parseInt(prompt('Enter Second Value: '));
let c = parseInt(prompt('Enter Third Value: '));

function sec_largest(a,b,c){
    lst.push(a,b,c)
    lst.sort()
    a = lst.at(-2)
    return a
}
console.log(sec_largest(a,b,c));