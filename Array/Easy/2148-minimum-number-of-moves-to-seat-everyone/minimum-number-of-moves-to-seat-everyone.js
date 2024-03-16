/** 00:02:11
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    let output = 0;

    const s1 = seats.sort((a, b) => a - b);
    const s2 = students.sort((a, b) => a - b);

    for (let i in s1) {
        output += Math.abs(s1[i] - s2[i])
    }

    return output
};