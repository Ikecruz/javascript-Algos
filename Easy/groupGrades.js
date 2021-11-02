/* 

    Given an array of scores between 0 and 100 for students in a course, write a function that returns 
    the number of students that failed, passed, and were exceptional in the course.

    Grade Definitions are given below:

    Students who score below 50, failed.
    Students who score 50 inclusive and above, passed.
    Students who score 90 inclusive and above, passed and are exceptional.

    Return an object that contains the number of students who passed, failed, and were exceptional.

    groupGrades(arr)
    Parameters
    arr: Array<Number> - Array containing scores of all students in the course.

    Return Value
    Object - An object with keys, failed, passed, exceptional that meet the given criteria

    Constraints
    0 ≤ array ≤ 100

    Examples

    Sample Return value
    groupGrades([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]) {failed: 4, passed: 6, exceptional: 2}
    groupGrades([70, 85, 90, 95, 96, 97, 98, 99]) {failed: 0, passed: 8, exceptional: 6}
    groupGrades([33, 80, 78, 89, 70, 49, 40, 43, 40, 33]) {failed: 6, passed: 4, exceptional: 0}

*/

const groupGrades = (array) => {
    let failed, passed, exceptional;
    failed = passed = exceptional = 0;

    array.forEach(element => {
        if (element >= 50) {
            passed++;
            if (element >= 90) {
                exceptional++;
            }
        } else{
            failed++;
        }
    });

    return {failed: failed, passed: passed, exceptional: exceptional}
}

// Test

console.log(groupGrades([70, 85, 90, 95, 96, 97, 98, 99]))