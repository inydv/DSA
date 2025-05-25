Array.prototype.filterPolyfill = function (cb) {
  let temp = [];

  // this - because points to array where we are using this method
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(cb(this[i], i, this));
  }

  return temp;
};

const arr = [1, 2, 3];
const result = arr.filterPolyfill((item, index, array) => item > 2);
console.log(result);
