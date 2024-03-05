/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let output = 0;

    const converter = (s) => {
        const [m, d] = s.split("-")
        console.log(m,d)
        console.log(month.slice(0,m-1).reduce((acc, cur) => acc + cur, 0))
        return +month.slice(0, m-1).reduce((acc, cur) => acc + cur, 0) + +d
    }
    const aA = converter(arriveAlice);
    const lA = converter(leaveAlice);
    const aB = converter(arriveBob)
    const lB = converter(leaveBob);

    console.log(aA, lA, aB, lB)

    for(let i=aA; i<=lA; i++){
        if(aB<=i && i<=lB) output++;
    }

    return output
};