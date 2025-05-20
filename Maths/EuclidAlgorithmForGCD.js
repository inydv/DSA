/**
 * Implements Euclid's Algorithm to find Greatest Common Divisor (GCD)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - GCD of a and b
 */
function euclidGCD(a, b) {
    // Ensure positive numbers
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

// Example usage
const num1 = 48;
const num2 = 18;
console.log(`GCD of ${num1} and ${num2} is:`, euclidGCD(num1, num2)); 