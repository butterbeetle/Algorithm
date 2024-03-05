/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let output = 0;

    const converter = (s) => {
        const calendar = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
        const [m, d] = s.split("-")
        return (calendar[m - 1] ?? 0) + +d
    }
    const aA = converter(arriveAlice);
    const lA = converter(leaveAlice);
    const aB = converter(arriveBob)
    const lB = converter(leaveBob);

    for (let i = aA; i <= lA; i++) {
        if (aB <= i && i <= lB) output++;
    }

    return output
};