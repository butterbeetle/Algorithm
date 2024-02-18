/** 00:07:27
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const arr = []

    s.split(" ").forEach(c=>{
        arr[c.at(-1)-1] = c.substring(0,c.length-1)
    })

    return arr.join(" ")
};