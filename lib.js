function getPrimeNumbersDescendingOrder(limit) {
    if (!Number.isInteger(limit)) throw new Error('limit is not a integer');

    if (limit <= 1) throw new Error('limit can not be equal or less than 1');

    const primeNumbers = [];
    for (let number = limit; number >= 2; number--) {
        if (isPrime(number)) primeNumbers.push(number);
    }

    return primeNumbers;
}

function isPrime(number) {
    for(let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false;
        }
    }
    return true;
}

exports.getPrimeNumbersDescendingOrder = getPrimeNumbersDescendingOrder;