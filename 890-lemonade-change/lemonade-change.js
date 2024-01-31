/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    const map = new Map();

    for (const bill of bills) {
        const five_dollars = map.get(5) || 0
        const ten_dollars = map.get(10) || 0

        if (bill === 5) {
            map.set(bill, five_dollars + 1)
        } else if (bill === 10) {
            if (!five_dollars) return false
            map.set(10, ten_dollars + 1)
            map.set(5, five_dollars - 1)
        } else if (bill === 20) {
            if (ten_dollars && five_dollars) {
                map.set(10, ten_dollars - 1)
                map.set(5, five_dollars - 1)
            } else if (five_dollars >= 3) {
                map.set(5, five_dollars - 3)
            } else return false
        }
    }


    return true
};

// 15 => 5 3개 or 10 1개 5 1개