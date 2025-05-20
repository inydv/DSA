/**
 * Implements Linear Search algorithm
 * @param {number[]} arr - Array to search in
 * @param {number} target - Element to find
 * @returns {number} - Index of target element or -1 if not found
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage
const arr = [5, 2, 9, 1, 7, 6, 3];
const target = 7;
console.log(`Index of ${target} in array:`, linearSearch(arr, target)); 