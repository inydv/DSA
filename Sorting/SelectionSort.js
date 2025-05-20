/**
 * Implements Selection Sort algorithm
 * @param {number[]} arr - Array to be sorted
 * @returns {number[]} - Sorted array
 */
function selectionSort(arr) {
    const result = [...arr];
    const n = result.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        
        for (let j = i + 1; j < n; j++) {
            if (result[j] < result[minIdx]) {
                minIdx = j;
            }
        }
        
        if (minIdx !== i) {
            // Swap elements
            [result[i], result[minIdx]] = [result[minIdx], result[i]];
        }
    }
    
    return result;
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", selectionSort(arr)); 