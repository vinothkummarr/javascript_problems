const prompt=require("prompt-sync")({sigint:true}); 
 
length = parseInt(prompt('How many number :'))

store =[]

function duplicate_num(){
for (i=1;i<=length;i++){
    num = parseInt(prompt('enter values :'))
    store.push(num)
    
}
a = [...new Set(store)];
join = a.join()

return (a)
}
    
console.log(duplicate_num());