/**
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

        pos[0] += moveSet[oper][0]
        pos[1] += moveSet[oper][1]

        return pos
    }

    const t = (pos, command) => {
        let cnt = 0;
        let tmp = [...pos];
        
        for (const char of command) {
            const [x, y] = move(tmp, char);
            if (x < 0 || y < 0 || x >= n || y >= n) break;
            tmp = [x, y]
            cnt++;
        }
        return cnt;
    }

    for (let i = 0; i < s.length; i++) {
        const command = s.slice(i);
        output.push(t(startPos, command))
    }

    return output
};