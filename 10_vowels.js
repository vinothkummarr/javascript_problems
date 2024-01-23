const prompt=require("prompt-sync")({sigint:true}); 
 
let val = (prompt("Enter the String: "));

let str1= val.toLowerCase()

let str = str1.split('') 

function vowels(val){
    let count = 0
    for (let l of str){
        if((l=='a') || (l=='e') || (l=='i') || (l=='o') ||(l=='u')){
            count++;
        }
    }
    return count
}
console.log(vowels(val));