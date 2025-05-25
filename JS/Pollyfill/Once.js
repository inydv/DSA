function once(func) {
  return function () {
    if (func) {
      func();
      func = null;
    }
  };
}

const hello = once(() => console.log("hello"));
const hello2 = once(() => console.log("hello2"));

hello();
hello();
hello2();
hello2();
