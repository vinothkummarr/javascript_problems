const prompt=require("prompt-sync")({sigint:true}); 
 
const val = parseInt(prompt("Enter the Value: "));


let pre1 =0;
let pre2 =1;
let arr =[0]; 


function fibonacci(val,pre1,pre2){

        if(val<=1){
            console.log('vinp')
            return 2
        } else{
        newnum = pre1 +pre2;
        arr.push(newnum)
        pre2 = pre1;
        pre1 =newnum;
        val--     
        fibonacci(val,pre1,pre2)
        return(arr) 
    }
    }
console.log(fibonacci(val,pre1,pre2));