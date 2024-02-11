/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    const arr = []
    arr[0] = pref[0]

    for (let i = 0; i < pref.length - 1; i++) {
        arr[i + 1] = pref[i] ^ pref[i + 1]
    }

    return arr
};