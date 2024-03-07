/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
    n = BigInt(n);

    const odds = n / 2n;
    const evens = n - odds;
    const MOD = BigInt(1e9 + 7);

    const modular_pow = (base, exponent, modulus) => {
        if (modulus === 1n) return 0n;
        let result = 1n;
        base %= modulus;

        while (exponent > 0n) {
            if (exponent % 2n === 1n) result = (result * base) % modulus
            exponent = exponent >> 1n;
            base = (base * base) % modulus;
        }

        return result
    }

    return modular_pow(4n, odds, MOD) * modular_pow(5n, evens, MOD) % MOD
};