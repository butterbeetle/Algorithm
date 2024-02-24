/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    for (let i = Math.floor(Math.sqrt(area)); i >= 1; i--) {
        if (!(area % i)) return [area / i, i]
    }
    return [area, 1]
};