Function.prototype.bindPolyFill = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + "not callable");

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
