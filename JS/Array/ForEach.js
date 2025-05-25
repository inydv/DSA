Array.prototype.forEachPolyfill = function (cb) {
  if (typeof cb !== "function") {
    throw new TypeError(cb + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    // skip empty slots
    cb(this[i], i, this);
  }
};

const arr = [1, 2, 3];
arr.forEachPolyfill((item, index, array) => console.log(item));
