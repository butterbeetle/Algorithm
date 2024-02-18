/** 00:03:35
 * @param {string} s
 * @return {string}
 */
var finalString = function(str) {
    let output = "";

    for(const s of str){
        if(s !== "i") output += s;
        else output = output.split("").reverse().join("")
    }

    return output
};