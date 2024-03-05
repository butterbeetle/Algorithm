/** 00:15:23
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    const output = [];
    const map = new Map();

    for (const cpdomain of cpdomains) {
        const [visit, domains] = cpdomain.split(" ")
        const arr = domains.split(".")

        while (arr.length) {
            const d = arr.join(".");
            map.set(d, (map.get(d) || 0) + +visit)
            arr.shift();
        }
    }

    for (const [d, v] of map) {
        const str = `${v} ${d}`
        output.push(str)
    }

    return output
};