const prompt=require("prompt-sync")({sigint:true}); 
 
let val = parseInt(prompt("Enter the Value: "));


let pre1 =1;
let pre2 =0;
let arr =[]; 

function fibonacci(val){
    if(val==0){
        arr.push(0)
    }
    else  if(val==1){
        arr.push(0,1)
    } else{
    
    for(i=3;i<=val;i++){
        newnum = pre1 +pre2;
        arr.push(newnum)
        pre2 = pre1;
        pre1 =newnum;
    }}
    return arr
}
console.log(fibonacci(val));