/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    const isBulky = (length, width, height) => {
        const volume = length * width * height
        if(length >= 1e4 || width >= 1e4 || height >= 1e4 || mass >= 1e4 || volume >= 1e9) return true
        return false
    }
    
    const isHeavy = (mass) => {
        if(mass >= 100) return true;
        return false
    }

    let bulky = isBulky(length, width, height);
    let heavy = isHeavy(mass);

    if(bulky && heavy) return "Both"
    else if(bulky) return "Bulky"
    else if(heavy) return "Heavy"
    else return "Neither"
};