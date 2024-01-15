/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const winermap = new Map;
    const loserMap = new Map;

    matches.forEach(match=>{
        const [winer, loser] = match;
        loserMap.set(loser, (loserMap.get(loser)||0)+1)
        if(!loserMap.get(winer)) winermap.set(winer, (winermap.get(winer)||0)+1)
        if(winermap.get(loser)) winermap.delete(loser)
    })
    const win = [...winermap.keys()].sort((a,b)=>a-b)
    const lose = [...loserMap].filter(v=>!(v[1]-1)).map(v=>v[0]).sort((a,b)=>a-b)
    return [win,lose]
};