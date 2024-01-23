const prompt=require("prompt-sync")({sigint:true}); 
 
let string= prompt("Enter the String: ");
let char = prompt("Enter the Character: ")


function index(string,char){
    split = string.split('')
    if (split.includes(char)){
        const indexx =split.indexOf(char)
        return indexx +1;
    } else {
        return 'Character Not Found'
    }
    
}
console.log(index(string,char));