/** 00:09:53
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let output = 0;
    let pl = 0;

    for (const laser of bank) {
        let l = laser.replace(/[^1]/g, "").length;
        if (!l) continue;
        output += pl * l;
        pl = l;

    }

    return output
};