/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (str) {
    const stack = [];
    const stars = [];

    for(let i =0; i<str.length; i++){
        if(str[i] === "(") stack.push(i)
        else if(str[i] === "*") stars.push(i)
        else{
            if(stack.length) stack.pop();
            else if(stars.length) stars.pop();
            else return false;
        }
    }

    while(stack.length && stars.length){
        if(stack.pop() > stars.pop()) return false
    }

    return !(stack.length > 0)
};

// (**(*()**()**((**(*) ((((( 8