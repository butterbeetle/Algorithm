/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    const arr = num.toString().split("")

    let max = 0;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 9) {
            max = arr[i];
            break;
        }
    }

    let maxStr = "";
    let minStr = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) maxStr += "9";
        else maxStr += arr[i]
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) minStr += "0";
        else minStr += arr[i]
    }

    return +maxStr - +minStr
};