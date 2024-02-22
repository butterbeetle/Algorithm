/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    const fromTrust = new Array(n).fill(0);
    const toTrust = new Array(n).fill(0);

    for (const [a, b] of trust) {
        fromTrust[a - 1]++;
        toTrust[b - 1]++;
    }

    for (let i = 0; i < n; i++) {
        if (!fromTrust[i] && toTrust[i] === n - 1) return i + 1;
    }

    return -1;
};