let strs = ["eat","tea","tan","ate","nat","bat"]

var groupAnagrams = function(strs,map = new Map()){
    if (!strs.length){
        return[]
    }
    
    for (words of strs){
        const reorder = words.split('').sort((a,b) => a.localeCompare(b)).join('')
        const values = map.get(reorder) || []
        values.push(words)
        map.set(reorder,values)
        
    }
    console.log([...map.values()])
    
};
return(groupAnagrams(strs))
