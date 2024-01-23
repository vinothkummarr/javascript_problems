const prompt=require("prompt-sync")({sigint:true}); 
 
let val = (prompt("Enter the String: "));

function words_count(val){
    words = val.trim().split(/\s+/)
    return words.length;
}

console.log(words_count(val))



