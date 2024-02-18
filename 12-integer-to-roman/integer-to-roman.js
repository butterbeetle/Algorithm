/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let output = "";
    const str = num + ""
    const roman = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }

    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        const n = str[i];
        const ten = 10 ** j;

        if (roman[n * ten]) output += roman[n * ten];
        else if (str[i] < 5) output += roman[ten].repeat(n)
        else output += roman[5 * ten] + roman[ten].repeat(n - 5)
    }

    return output
};