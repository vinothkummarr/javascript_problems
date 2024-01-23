const prompt=require("prompt-sync")({sigint:true}); 

num = parseInt(prompt("Enter the Number: "))

function factorial(num){
    if (num ==0){
        return 1
    } else{
        return num * factorial(num -1)
    }
}
console.log(factorial(num));