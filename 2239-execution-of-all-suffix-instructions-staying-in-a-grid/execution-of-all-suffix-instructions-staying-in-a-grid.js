/** 00:31:44
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
    const output = [];

    const move = (pos, oper) => {
        const moveSet = {
            "R": [0, 1],
            "L": [0, -1],
            "U": [-1, 0],
            "D": [1, 0]
        }

        return [pos[0] + moveSet[oper][0], pos[1] + moveSet[oper][1]]
    }

    for (let i = 0; i < s.length; i++) {
        let cnt = 0;
        let tmp = [...startPos];

        for (const char of s.slice(i)) {
            const [x, y] = move(tmp, char);
            if (x < 0 || y < 0 || x >= n || y >= n) break;
            tmp = [x, y]
            cnt++;
        }

        output.push(cnt)
    }

    return output
};