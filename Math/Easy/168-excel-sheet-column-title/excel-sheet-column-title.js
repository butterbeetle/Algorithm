/** 00:39:19
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const map = new Map();
    let str = "";

    for(const i in alphabet){
        map.set(+i+1, alphabet[i])
    }

    while(columnNumber){
        let r = columnNumber % 26;
        let q = parseInt(columnNumber / 26)
        if(!r){
            r=26;
            q--;
        }

        str = map.get(r) + str
        columnNumber = q;
    }

    return str
};