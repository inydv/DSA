Array.prototype.find = function (cb, args) {
  if (typeof cb !== "function") throw new TypeError(cb + "is not a function");

  for (let i = 0; i < this.length; i++) {
    if (i in this && cb(args, this[i], i, this)) return this[i];
  }

  return undefined;
};

