/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    const s = [0, 0]

    for (const move of moves) {
        switch (move) {
            case "R":
                s[0]++
                break;
            case "L":
                s[0]--
                break;
            case "U":
                s[1]++
                break;
            case "D":
                s[1]--
                break;
        }
    }
    
    return !s[0] && !s[1]
};