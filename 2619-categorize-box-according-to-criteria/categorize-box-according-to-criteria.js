/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    let isBulky = false;
    let isHeavy = false;

    if(length >= 1e4 ||
        width >= 1e4 ||
        height >= 1e4 ||
        mass >= 1e4 ||
        (length * width * height) >= 1e9){
            isBulky = true;
        }
    if(mass >= 100) isHeavy = true;

    if(isBulky && isHeavy) return "Both"
    else if(!isBulky && !isHeavy) return "Neither"
    else if(isBulky && !isHeavy) return "Bulky"
    else if(!isBulky && isHeavy) return "Heavy"
};