/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const map = new Map();
    let output = Number.NEGATIVE_INFINITY;

    for(const edge of edges){
        const edge1 = map.get(edge[0])||0;
        const edge2 = map.get(edge[1])||0;

        map.set(edge[0], edge1+1);
        map.set(edge[1], edge2+1);
        
        output = edge1 > edge2 ? edge[0] : edge[1]
    };

    return output
};