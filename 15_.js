const prompt=require("prompt-sync")({sigint:true}); 
 
num = parseInt(prompt('Enter the number :'))

a =0;
function prime_number(num){
    for (i=2;i<=10;i++){
        if (num%i==0){
            a++
        }
    }
    return a
}
b = prime_number(num)

function check(b){
    if (num<=10 && b==1){
        return 'Prime'
    } else if(num>10 && b==0){
        return 'Prime'
    } else if (num == 1){
        return 'Neither Prime Nor a Composite'
    } else{
        return 'Not a Prime'
    }
}
console.log(check(a));