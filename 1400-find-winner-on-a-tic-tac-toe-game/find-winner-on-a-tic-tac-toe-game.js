/** 00:42:34
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ];

    const grid = new Array(9).fill(0);
    
    for (let i = 0; i < moves.length; i++) {
        grid[(moves[i][0] * 3) + moves[i][1]] = !(i % 2) ? "A" : "B";
    }
    
    for(let i=0; i<win.length; i++){
        const who = grid[win[i][0]];
        if(who !== 0 && who === grid[win[i][1]] && who === grid[win[i][2]]){
            return who;
        }
    }

    return moves.length === 9 ? "Draw" : "Pending"
};