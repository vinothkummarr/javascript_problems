const prompt=require("prompt-sync")({sigint:true}); 
 
let num = prompt("Enter the Value: ");

a = ''
function multi(num){
    for (i=1;i<=16;i++){
        prod = num *i
        
        table = (num + "*" +i + "=" + prod)
        a+=table
        a += '\n'
    }
    
    return a
}
console.log(multi(num));