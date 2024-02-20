/** 00:09:53
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let output = 0;
    let beams = [];

    for (const laser of bank) {
        beams.push(laser.replace(/[^1]/g, "").length);
    }

    const laserBeams = beams.filter(Boolean);

    if (!laserBeams.length) return 0;

    for (let i = 1; i < laserBeams.length; i++) {
        output += (laserBeams[i - 1] * laserBeams[i]);
    }

    return output
};