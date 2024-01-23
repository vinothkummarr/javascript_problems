const prompt=require("prompt-sync")({sigint:true}); 
 
length = parseInt(prompt('How many number :'))

array =[]


function duplicate_num(){
    for (i=0; i<length; i++){
        value  = prompt("Enter the Value: ");
        array.push(value)
    }
    str = array.join("")
    split = array.reverse()
    join = split.join("")

    if (str == join){
        return "True";
    } else {
        return "False"
    }

}
    
console.log(duplicate_num());