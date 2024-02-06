/** 00:23:45
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sorted = [];
    const map = new Map();
    let idx = 0;

    for(const i in strs){
        const s = [...strs[i]].sort().join("");
        sorted.push(s)
        if(!map.has(s)) map.set(s, idx++)
    }
    console.log(map)
    
    const arr = Array.from(Array(map.size),()=>[])

    for(const i in sorted){
        arr[map.get(sorted[i])].push(strs[i])
    }
    
    return arr.sort((a,b)=>a.length - b.length)
};