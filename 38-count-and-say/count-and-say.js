/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let i = 1;
    let output = "1";

    while (i < n) {
        let str = "";
        let cnt = 0;
        let idx = -1;

        const set = new Set();
        const arr = [];

        for (const c of output) {
            if (!set.has(c)) {
                // 없다는 것은 새로운 숫자라는 뜻
                set.clear();
                cnt = 1;
                idx++;
                arr[idx] = [c, cnt]
                set.add(c)
            }
            else arr[idx][1] = ++cnt
        }

        for (const [k, v] of arr) {
            str += v + "" + k
        }

        output = str;
        i++
    }

    return output;
};