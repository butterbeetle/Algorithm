/** 00:36:44
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
    const output = [];

    for (let i = 0; i < s.length; i++) {
        let cnt = 0;
        let [y, x] = [...startPos];

        for (let j = i; j < s.length; j++) {
            switch (s[j]) {
                case 'L': x--; break;
                case 'R': x++; break;
                case 'U': y--; break;
                case 'D': y++; break;
            }

            if (x < 0 || y < 0 || x === n || y === n) break;
            cnt++;
        }

        output.push(cnt)
    }

    return output
};