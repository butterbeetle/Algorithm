/** 00:05:16
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    const output = []
    for (let i = 0; i < image.length; i++) {
        let row = []
        for (let j = image.length - 1; j >= 0; j--) {
            row.push(+!(image[i][j]))
        }
        output.push(row)
    }
    return output
};