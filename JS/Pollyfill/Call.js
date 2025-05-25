/*
let car1 = {
    color: "Red",
    company: "Ferrari",
};

function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

puchaseCar.call(car1, "$", 5000000);
*/

Function.prototype.callPolyFill = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + "not callable");

  context.fn = this;
  context.fn(...args);
};
