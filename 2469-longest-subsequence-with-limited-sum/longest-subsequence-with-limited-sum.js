/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    const output = new Array(queries.length).fill(0);
    nums.sort((a, b) => a - b);

    const arr = nums.reduce((acc, cur, i) => {
        if (!i) acc.push(cur);
        else acc.push(acc[i - 1] + cur);
        return acc
    }, [])

    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > queries[i]) break;
            output[i] = j + 1;
        }
    }

    return output
};