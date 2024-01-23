const prompt=require("prompt-sync")({sigint:true}); 
 
let length = parseInt(prompt("Enter the Value: "));


function sum_of_even(length){
    let numbers =0
    for(i=0; i<=length;i++){
        if(i%2==0){
        numbers+= i;
        }
    }
    return numbers;
}
console.log(sum_of_even(length));