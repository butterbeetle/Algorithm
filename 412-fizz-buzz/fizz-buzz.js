/** 00:02:40
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let output = [];

    for (let i = 1; i <= n; i++) {
        if (!(i % 3) && !(i % 5)) output = [...output, "FizzBuzz"]
        else if (!(i % 3)) output = [...output, "Fizz"]
        else if (!(i % 5)) output = [...output, "Buzz"]
        else output = [...output, i.toString()]
    }

    return output
};