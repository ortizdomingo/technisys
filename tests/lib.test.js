const lib = require('../lib');

describe('getPrimeNumbersDescendingOrder', () => {
    it('should throw if limit is not a integer', () => {
        const args = [null, undefined, NaN, '', false, 15.2];
        args.forEach(arg => {
            expect(() => { lib.getPrimeNumbersDescendingOrder(arg) }).toThrow();
        }); 
    });

    it('should throw if limit is less or equal than 1', () => {
        const args = [1, 0, -1];
        args.forEach(arg => {
            expect(() => { lib.getPrimeNumbersDescendingOrder(arg) }).toThrow();
        }); 
    });

    it('should return array sort in descending order of prime numbers', () => {
        const result = lib.getPrimeNumbersDescendingOrder(15);
        expect(result).toEqual([13, 11, 7, 5, 3, 2]);
    });
});