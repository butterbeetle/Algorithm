/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
    let output = 0;
    let point = "a";
    const map = "abcdefghijklmnopqrstuvwxyz".split("").reduce((acc, cur, i) => {
        acc.set(cur, i + 1);
        return acc
    }, new Map());

    for (const w of word) {
        let x = map.get(w) - map.get(point);
        x = x < 0 ? x+26:x
        let y = map.get(point) - map.get(w)
        y = y < 0 ? y+26:y
        console.log(`현재위치:${point} 가야할곳:${w}`)
        if (point !== w){ 
            console.log(`시계방향:${x}..반시계방향:${y}`)
            output += Math.min(x, y)
            console.log(`이동 후:${output}`)
        }
        output += 1;
        console.log(`누르기 후:${output}`)
        point = w;
        console.log(`--------------------------`)
    }

    return output
};