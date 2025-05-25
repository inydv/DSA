// [].map((iten, i, arr) => {});

Array.prototype.mapPolyfill = function (cb) {
  let temp = [];

  // this - because points to array where we are using this method
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const arr = [1, 2, 3];
const result = arr.mapPolyfill((item, index, array) => item * 2);
console.log(result);
