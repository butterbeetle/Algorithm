/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const map = {
        "type":0,
        "color":1,
        "name":2
    }
    
    let cnt = 0;

    for(const item of items){
        if(item[map[ruleKey]] === ruleValue) cnt++;
    }

    return cnt
};