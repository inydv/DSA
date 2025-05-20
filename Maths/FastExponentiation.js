/**
 * Implements Fast Exponentiation (Binary Exponentiation)
 * @param {number} base - The base number
 * @param {number} power - The power to raise the base to
 * @returns {number} - The result of base^power
 */
function fastExponentiation(base, power) {
    if (power === 0) return 1;
    if (power === 1) return base;
    
    const halfPower = Math.floor(power / 2);
    const halfResult = fastExponentiation(base, halfPower);
    
    if (power % 2 === 0) {
        return halfResult * halfResult;
    } else {
        return base * halfResult * halfResult;
    }
}

// Example usage
const base = 2;
const power = 10;
console.log(`${base}^${power} =`, fastExponentiation(base, power)); 