// @flow

const math = require('./math');

function square(n: number): number {
  return n * n;
}

// console.log(square(2));
console.log(square('2'));
console.log(math.square('2'));
