/** 00:06:13
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    const arr = sentence.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (!vowel.includes(arr[i][0])) arr[i] = arr[i].substring(1) + arr[i].substring(0, 1)
        arr[i] += "ma" + "a".repeat(i + 1)
    }

    return arr.join(" ")
};