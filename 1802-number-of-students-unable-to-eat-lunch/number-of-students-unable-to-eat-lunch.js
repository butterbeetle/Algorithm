/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let noop = 0;
    
    while (students.length) {
        if (students[0] === sandwiches[0]) {
            noop = 0;
            students.shift();
            sandwiches.shift();
        } else {
            students.push(students.shift())
            noop++;
        }

        if (noop === students.length) return students.length
    }

    return 0;
};
/**
[ 1, 1, 1 ]
[ 0, 1, 1 ]
 */
/**
[ 1, 1, 1, 1 ] 
[ 1, 1, 1, 0 ]
 */