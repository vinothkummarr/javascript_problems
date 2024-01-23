const prompt=require("prompt-sync")({sigint:true}); 

let stri= (prompt("Enter String: "));

string = stri.replace(/[^a-zA-Z]/g, '');

function palindrome(string){
    s = string.split('')
    r = s.reverse().join("")
    if (string == r){
        return 'True'
    } else{
        return 'False'
    }
}
console.log(palindrome(string));