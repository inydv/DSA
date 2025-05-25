/*
const clumsySquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

console.time("First call");
console.log(clumsySquare(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(clumsySquare(9467, 7649));
console.timeEnd("Second call");
*/

function Memoize(fn, context) {
  const res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }

    return res[argsCache];
  };
}

const clumsySquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

const memoizeclumsySquare = Memoize(clumsySquare);

console.time("First call");
console.log(memoizeclumsySquare(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizeclumsySquare(9467, 7649));
console.timeEnd("Second call");
