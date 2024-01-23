const prompt=require("prompt-sync")({sigint:true}); 




const text = prompt("Enter the Text: ")

const keyy = parseInt(prompt("Enter the Key: ")) 
const decision = prompt("Enter E for Encryption or D Decryprion: ")

if (decision =="E"){
    final_key = keyy
} else if (decision == "D"){
    final_key = keyy *-1
} else if(decision !="E" || decision != "D") {
    prompt("Enter Correctly ..!!")
    return ;
}

ascii =[]
function cipher(text){
    for (i of text){
        con = i.charCodeAt()
        ascii.push(con)
    }
    return ascii
}
cipher(text)
adding =[]
function textplusKey(){
    for ( val of ascii){
        val = val + final_key
        adding.push(val)
    }

    return  adding
}
textplusKey()
changed =[]
function convert(){
    for (num of adding){
        conn = String.fromCharCode(num)
        changed.push(conn)
    }
    return changed.join("")
}

console.log(convert())