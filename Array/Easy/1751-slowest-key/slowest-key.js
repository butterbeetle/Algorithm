/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    const m = new Map();

    for (let i = 0; i < keysPressed.length; i++) {
        const max = Math.max(m.get(keysPressed[i]) ?? 0,
            (releaseTimes[i] - (releaseTimes[i - 1] ?? 0)))
        m.set(keysPressed[i], max);
    }

    return [...m].sort((a, b) => b[1] - a[1] || (a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : 0))[0][0]
};