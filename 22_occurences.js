const prompt=require("prompt-sync")({sigint:true}); 
 
string = prompt('Enter the String :')



function occurences(string){
    split = string.split('')
    array =[]
    obj ={}
    for(i=0 ; i < split.length; i ++){
        if(!obj[split[i]]){
            obj[split[i]] = 1
        }else{
            obj[split[i]]++  
        }
            }
    return (obj)
}
    
console.log(occurences(string));