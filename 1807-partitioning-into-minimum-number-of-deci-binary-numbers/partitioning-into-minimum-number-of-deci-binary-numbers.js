/** 00:06:11
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    let output = 0;

    for (const c of n) {
        output = output > c ? output : c
    }

    return output
};

// 82734

// 11111
// 11111
// -----
// 60512

// 10111
// -----
// 50401

// 10101
// -----
// 40300

// 10100
// 10100
// 10100
// -----
// 10000