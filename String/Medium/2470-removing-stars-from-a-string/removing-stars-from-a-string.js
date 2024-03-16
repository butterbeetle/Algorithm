/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    const stack = [];

    for (const c of s) {
        if (c === "*") stack.pop();
        else stack.push(c)
    }

    return stack.join("")

    // TLE
    // const arr = s.split("");

    // while (arr.includes("*")) {
    //     const index = arr.indexOf("*")
    //     arr.splice(index - 1, 2)
    // }

    // return arr.join("")
};