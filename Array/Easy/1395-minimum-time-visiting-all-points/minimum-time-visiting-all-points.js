/** 00:03:27
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let output = 0;

    for (let i = 1; i < points.length; i++) {
        const x = Math.abs(points[i - 1][0] - points[i][0]);
        const y = Math.abs(points[i - 1][1] - points[i][1]);
        output += Math.max(x, y)
    }

    return output
};