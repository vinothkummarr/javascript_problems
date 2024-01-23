const prompt=require("prompt-sync")({sigint:true}); 

const num = parseInt(prompt("Enter the Decimal Number: "))

ans =[]
function hexaDecimal(num){
    temp =''    
    q = Math.floor(num/16);
    r = num % 16;
    remainder(r);
    ans.push(temp)
    if (q!=0){
        hexaDecimal(q)
    }
    return answer(ans)

}

function remainder(r){
    if (r<=9){
        temp +=r
    } else if(r==10){
        temp += "A"
    } else if(r==11){
        temp += "B"
    } else if(r==12){
        temp += "C"
    } else if(r==13){
        temp += "D"
    } else if(r==14){
        temp += "E"
     }else if(r==15){
        temp += "F"
    } 
}

function answer(ans){
    let anss =''
    for (i= ans.length -1; i>=0; i--){
        anss += ans[i]
    }
    return anss
}
console.log(hexaDecimal(num))