/**
 * Finds the minimum number of jumps needed to reach the end of the array
 * @param {number[]} arr - The input array
 * @returns {number} - Minimum number of jumps needed
 */
function minimumJumps(arr) {
    if (arr.length <= 1) return 0;
    
    let maxReach = arr[0];
    let steps = arr[0];
    let jumps = 1;
    
    for (let i = 1; i < arr.length; i++) {
        if (i === arr.length - 1) return jumps;
        
        maxReach = Math.max(maxReach, i + arr[i]);
        steps--;
        
        if (steps === 0) {
            jumps++;
            if (i >= maxReach) return -1;
            steps = maxReach - i;
        }
    }
    
    return -1;
}

// Example usage
const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
console.log("Minimum jumps needed:", minimumJumps(arr)); 