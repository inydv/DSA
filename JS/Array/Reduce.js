Array.prototype.reducePolyfill = function (cb, initialValue) {
  let temp = initialValue;

  // this - because points to array where we are using this method
  for (let i = 0; i < this.length; i++) {
    temp = temp ? cb(temp, this[i], i, this) : this[i];
  }

  return temp;
};

const arr = [1, 2, 3];
const result = arr.reducePolyfill(
  (total, item, index, array) => total + item,
  0
);
console.log(result);
