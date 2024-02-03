/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0;
    let y = 0;

    for (const move of moves) {
        switch (move) {
            case "R":
                x++
                break;
            case "L":
                x--
                break;
            case "U":
                y++
                break;
            case "D":
                y--
                break;
        }
    }
    
    return !x && !y
};