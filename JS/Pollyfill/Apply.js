Function.prototype.applyPolyFill = function (context = {}, args) {
  if (typeof this !== "function") throw new Error(this + "not callable");
  if (!Array.isArray(args)) throw new Error("Not Array");

  context.fn = this;
  context.fn(...args);
};
