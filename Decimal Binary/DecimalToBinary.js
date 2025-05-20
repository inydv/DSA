/**
 * Converts a decimal number to binary
 * @param {number} decimal - The decimal number to convert
 * @returns {string} - Binary representation
 */
function decimalToBinary(decimal) {
    if (decimal === 0) return "0";
    
    let binary = "";
    let num = Math.abs(decimal);
    
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    
    return decimal < 0 ? "-" + binary : binary;
}

// Example usage
const decimal = 42;
console.log(`Decimal ${decimal} in binary is:`, decimalToBinary(decimal)); 