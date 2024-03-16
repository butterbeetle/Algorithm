/** 00:12:53
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const parentheses = [];
    
    const generate = (str, r, l) => {
        if (r < l || r > n || l > n) return;
        if (r === n && l === n) {
            parentheses.push(str);
            return;
        }

        generate(str + "(", r + 1, l)
        generate(str + ")", r, l + 1)
    }

    generate("(", 1, 0)

    return parentheses
};