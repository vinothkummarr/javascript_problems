const prompt=require("prompt-sync")({sigint:true}); 

const array = [4,0,3,2,1,4,5,6,7,11]
const key = parseInt(prompt("Enter the Number: "))

l = 0
h = array.length -1

function search(l,h,key){

mid = l + (h - l)/2
middle = Math.floor(mid)
if (array[middle] == key){
    return('Found')
} else if( array[middle] >key){
    return search(l,middle-1,key)
} else if ( array[middle] < key){
    return search(middle+1,h,key)
} else {
    return "Not Found"
}
}
console.log(search(l,h,key))