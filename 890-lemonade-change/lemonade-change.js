/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let count_5 = 0;
    let count_10 = 0;

    if (bills[0] !== 5) return false;

    for (const bill of bills) {
        if (bill === 5) count_5++;
        else if (bill === 10) {
            if (!count_5) return false
            count_10++;
            count_5--;
        } else if (bill === 20) {
            if (count_5 && count_10) {
                count_10--;
                count_5--;
            } else if (count_5 >= 3) {
                count_5 -= 3;
            } else return false;
        }
    }

    return true
};

// 15 => 5 3개 or 10 1개 5 1개