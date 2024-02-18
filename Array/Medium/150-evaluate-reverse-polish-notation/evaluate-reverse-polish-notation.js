/** 00:20:47
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    const sign = ["+","-","*","/"];

    for (const token of tokens) {
        if(sign.includes(token)){
            const rightToken = stack.pop();
            const leftToken = stack.pop();
            switch(token){
                case "+":
                    stack.push(leftToken + rightToken)
                    break;
                case "-":
                    stack.push(leftToken - rightToken)
                    break;
                case "*":
                    stack.push(leftToken * rightToken)
                    break;
                case "/":
                    stack.push(Math.trunc(leftToken / rightToken))
                    break;
            }
        }else{
            stack.push(parseInt(token))
        }
    }
    
    return stack[0]
};