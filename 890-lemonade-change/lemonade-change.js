/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    const map = new Map();

    for (const bill of bills) {
        map.set(bill, (map.get(bill) || 0) + 1)

        if (bill === 10) {
            map.set(5, (map.get(5) || 0) - 1)
        } else if (bill === 20) {
            if (map.get(10) && map.get(5)) {
                map.set(10, (map.get(10) || 0) - 1)
                map.set(5, (map.get(5) || 0) - 1)
            }
            else map.set(5, (map.get(5) || 0) - 3)
        }

        if (map.get(5) < 0 || map.get(10) < 0) return false

    }

    for (const v of map.values()) {
        if (v < 0) return false
    }

    return true
};

// 15 => 5 3개 or 10 1개 5 1개