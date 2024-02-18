function titleToNumber(columnTitle: string): number {
    const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((acc,cur,i)=>{
        acc.set(cur,i+1)
        return acc
    },new Map)
    
    return columnTitle.split("").reverse().reduce((acc,cur,i)=>{
        acc+=( map.get(cur) ) * Math.pow(26,i)
        return acc
    },0);
};