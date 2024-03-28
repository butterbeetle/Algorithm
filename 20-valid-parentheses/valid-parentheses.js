/** 00:11:34
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
    const stack = [];
    const isTrue = ["()", "[]", "{}"]

    for (const s of str) {
        if (s === "(" || s === "[" || s === "{") stack.push(s);
        else if (!isTrue.includes(stack.pop() + s)) return false
    }

    return !(stack.length > 0)
};

