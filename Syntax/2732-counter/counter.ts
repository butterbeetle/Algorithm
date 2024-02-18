function createCounter(n: number): () => number {
    let cnt = n;
    return ()=> cnt++
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */