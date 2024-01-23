const prompt=require("prompt-sync")({sigint:true}); 
 
let val = prompt("Enter the String: ");

function pangram(val){
    string1 = 'abcdefghijklmnopqrstuvwxyz';
    string = val.replace(/[^a-zA-Z]/g, '');
    //string2= 'abcdefghijklmnopqrstuvwxyz'
    let str1= string.toLowerCase()
    s = str1.trim().split(/\s+/)
    sort = s.sort();
    
    string2 =s.join("")
    a = [...new Set(string2)];

    b = a.join("")    
    c = b.split('').sort()
    d= c.join("")

    console.log(a)
    
    const compareValue = string1.localeCompare(d)
    if (compareValue == 0){
        return "True"
    } else{
        return "False"
    }
}

console.log(pangram(val))



