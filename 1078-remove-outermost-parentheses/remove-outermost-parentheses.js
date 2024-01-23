/** 73번째 00:04:13
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(str) {
    let output = "";
    const stack = [];
    let leftParenthesis = 0;
    let rightParenthesis = 0;

    for(const s of str){
        if(s === "(") leftParenthesis++;
        else rightParenthesis ++;

        stack.push(s);

        if(leftParenthesis === rightParenthesis){
            stack.shift();
            stack.pop();
            output += stack.join("")
            stack.length = 0
        }
    }

    return output
};