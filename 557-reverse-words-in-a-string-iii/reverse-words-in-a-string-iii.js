/** 00:02:32
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(" ")
    const output = []

    arr.forEach(c=>{
        output.push(c.split("").reverse().join(""))
    })

    return output.join(" ")
};