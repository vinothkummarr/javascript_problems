const prompt=require("prompt-sync")({sigint:true}); 

const email = prompt("Enter the Mail: ")

function mail(email){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    verify = emailRegex.test(email)  
    if(verify == true){
        return "Correct Email Address"
    } else {
        return "Not a Email  Address"
    }
}

console.log(mail(email))