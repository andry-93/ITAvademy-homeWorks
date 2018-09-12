'use strict';
function areArraysEqual(a1, a2) {
    if (!a1||!a2) {
        return false;
    }
    if (a1.length!==a2.length) {
        return false;
    }
    if (a1[i]!==a2[i]){
        return false;
    }
    return true;
}

console.log(areArraysEqual([1,2,3], [1,4,5])); // false
console.log(areArraysEqual([1,2,3], [1,2,"3"])); // false
console.log(areArraysEqual([1,2,3], [1,2,3])); // true
console.log(areArraysEqual([], [])); // true
console.log(areArraysEqual([], null)); // false