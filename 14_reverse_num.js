const prompt=require("prompt-sync")({sigint:true}); 
 
length = parseInt(prompt('How many number :'))

store =[]

function reverse_num(){
for (i=1;i<=length;i++){
    num = parseInt(prompt('enter values :'))
    store.push(num)
}

return (store.reverse())
}
    
console.log(reverse_num());