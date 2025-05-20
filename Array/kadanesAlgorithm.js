/**
 * Finds the maximum sum of a contiguous subarray using Kadane's Algorithm
 * @param {number[]} arr - The input array
 * @returns {number} - Maximum sum of contiguous subarray
 */
function kadanesAlgorithm(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// Example usage
const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Maximum sum of contiguous subarray:", kadanesAlgorithm(arr)); 