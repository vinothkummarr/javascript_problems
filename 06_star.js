const prompt=require("prompt-sync")({sigint:true}); 
 
let val = parseInt(prompt("Enter the Value: "));


function star(val){
    let stars =''
    for (i=1;i<=val;i++){
        for (j=1; j<=i; j++){
            stars += '*'
        }
     stars += '\n'    
    }
    return stars;
}
console.log(star(val));