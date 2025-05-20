/**
 * Implements Sieve of Eratosthenes to find all prime numbers up to n
 * @param {number} n - The upper limit
 * @returns {number[]} - Array of prime numbers
 */
function sieveOfEratosthenes(n) {
    const primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false;
    
    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }
    
    return primes.reduce((acc, isPrime, index) => {
        if (isPrime) acc.push(index);
        return acc;
    }, []);
}

// Example usage
const n = 50;
console.log(`Prime numbers up to ${n}:`, sieveOfEratosthenes(n)); 