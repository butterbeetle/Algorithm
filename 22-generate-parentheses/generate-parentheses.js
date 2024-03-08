/** 0012:53
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const output = [];
    const t = (str,r,l) => {
        if(r<l || r>n || l>n) return ;
        if(r===n && l===n){
            output.push(str);
            return;
        }

        t(str+"(",r+1,l)
        t(str+")",r,l+1)
    }

    t("(",1,0)

    return output
};