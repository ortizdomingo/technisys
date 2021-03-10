const lib = require('./lib');

const args = process.argv.slice(2);

const limit = parseInt(args[0]);
const result = lib.getPrimeNumbersDescendingOrder(limit);

console.log(result);