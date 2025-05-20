/**
 * Implements Insertion Sort algorithm
 * @param {number[]} arr - Array to be sorted
 * @returns {number[]} - Sorted array
 */
function insertionSort(arr) {
    const result = [...arr];
    
    for (let i = 1; i < result.length; i++) {
        const current = result[i];
        let j = i - 1;
        
        while (j >= 0 && result[j] > current) {
            result[j + 1] = result[j];
            j--;
        }
        
        result[j + 1] = current;
    }
    
    return result;
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr)); 