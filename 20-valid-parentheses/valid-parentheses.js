/** 00:11:34
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
    const stack = [];
    let isTrue = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (const s of str) {
        if (s === "(" || s === "[" || s === "{") stack.push(s);
        else if (isTrue[s] !== stack.pop()) return false
    }

    return !(stack.length > 0)
};

