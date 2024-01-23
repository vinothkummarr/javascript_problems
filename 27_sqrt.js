const prompt=require("prompt-sync")({sigint:true}); 
 
value = parseInt(prompt('Enter the number :'))


function sqrt(number){
    let a = Math.floor(Math.sqrt(number));
    if ((Math.ceil(Math.sqrt(number))) ==(Math.floor(Math.sqrt(number)))){
        return 'Perfect Square of : ' + a;
    } else{

    }
        return 'Not a Perfecr Square'
}
    
console.log(sqrt(value));