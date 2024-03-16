/** 00:16:37
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
    let step = 0;
    let water = capacity;

    for (let i = 0; i < plants.length; i++) {
        if (water >= plants[i]) {
            step++;
            water -= plants[i];
        } else {
            step += (i * 2) + 1;
            water = capacity - plants[i];
        }
    }

    return step
};