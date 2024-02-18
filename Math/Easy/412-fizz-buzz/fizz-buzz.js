/** 00:02:40
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let output = [];

    for (let i = 1; i <= n; i++) {
        if (!(i % 15)) output.push("FizzBuzz")
        else if (!(i % 3)) output.push("Fizz")
        else if (!(i % 5)) output.push("Buzz")
        else output.push(`${i}`)
    }

    return output
};