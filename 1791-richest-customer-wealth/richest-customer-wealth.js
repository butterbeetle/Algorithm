/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealth = 0;
    
    for(let i=0; i<accounts.length; i++){
        const curWealth = accounts[i].reduce((acc,cur)=>acc+=cur,0)
        wealth = wealth < curWealth ? curWealth : wealth
    }

    return wealth
};