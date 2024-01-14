function isPalindrome(x: number): boolean {
    const str = (x+"").split("")
    return str.join("") === str.reverse().join("")
};