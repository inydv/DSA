/**
 * Converts a binary number to decimal
 * @param {string} binary - The binary number as a string
 * @returns {number} - Decimal representation
 */
function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 0;
    
    // Handle negative numbers
    const isNegative = binary.startsWith("-");
    if (isNegative) {
        binary = binary.substring(1);
    }
    
    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === "1") {
            decimal += Math.pow(2, power);
        }
        power++;
    }
    
    return isNegative ? -decimal : decimal;
}

// Example usage
const binary = "101010";
console.log(`Binary ${binary} in decimal is:`, binaryToDecimal(binary)); 