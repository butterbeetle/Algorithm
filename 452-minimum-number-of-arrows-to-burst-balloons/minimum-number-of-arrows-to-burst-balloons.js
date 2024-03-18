/** 00:49:47
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    const length = points.length
    if (length === 1) return 1;

    points.sort((a, b) => a[1] - b[1])

    let output = 0;
    let prevS = points[0][0]
    let prevE = points[0][1]

    for (let i = 1; i < length; i++) {
        let [s, e] = points[i];
        if (prevS <= s) prevS = s;
        if (e <= prevE) prevE = e;

        if (prevE < s) {
            output++;
            prevS = s;
            prevE = e;
        }
    }

    return output + 1
};