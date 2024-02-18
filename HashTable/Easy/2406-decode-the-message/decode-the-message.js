/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const set = new Set(key.replaceAll(" ",""))
    const map = new Map();
    let i = 97;
    let str = "";

    for(const k of set){
        map.set(k, String.fromCharCode(i++))
    }

    for(const m of message){
        if(m === " ") str += m;
        else str += map.get(m)
    }
    
    return str
};