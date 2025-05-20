/**
 * Implements Binary Search algorithm
 * @param {number[]} arr - Sorted array to search in
 * @param {number} target - Element to find
 * @returns {number} - Index of target element or -1 if not found
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
console.log(`Index of ${target} in array:`, binarySearch(arr, target)); 