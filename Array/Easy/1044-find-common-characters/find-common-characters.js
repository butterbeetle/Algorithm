/** 00:29:12
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    const output = []
    const map = new Map()

    for (const i in words) {
        const m = new Map()

        for (const word of words[i]) {
            m.set(word, (m.get(word) || 0) + 1)
        }

        if (+i) {
            for (const [k, v] of map) {
                if (m.has(k)) map.set(k, m.get(k) < v ? m.get(k) : v)
                else map.delete(k)
            }
        } else {
            for (const word of words[i]) {
                map.set(word, (map.get(word) || 0) + 1)
            }
        }
    }

    for (const [k, v] of map) {
        for (let i = 0; i < v; i++) {
            output.push(k)
        }
    }

    return output
};