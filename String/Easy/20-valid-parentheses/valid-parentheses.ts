function isValid(s: string): boolean {
    const map = {
        ")":"(",
        "}":"{",
        "]":"[",
    }
    const stack = [];

    for(const i of s){
        if(["(","[","{"].includes(i))stack.push(i)
        else if(stack.pop() !== map[i])return false   
    }

    return !stack.length;
};