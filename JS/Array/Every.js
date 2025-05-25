// const obj = { min: 2 };

// [(1, 2, 3, 4, 5)].every((item, index, arr) => {
//   return item > this.min;
// }, obj);

Array.prototype.every = function (cb, args) {
  if (typeof cb !== "function") throw new TypeError(cb + "is not a function");

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (!cb.call(args, this[i], i, this)) {
        return false;
      }
    }
  }

  return true;
};
