// Polyfill for setTimeout
global.setTimeout = function (cb, delay) {
  const start = Date.now();
  function check() {
    if (Date.now() - start >= delay) {
      cb();
    } else {
      setImmediate(check);
    }
  }
  setImmediate(check);
};

// Polyfill for setInterval
global.setInterval = function (cb, delay,) {
  let active = true;
  function repeat() {
    if (!active) return;
    cb();
    setTimeout(repeat, delay);
  }
  setTimeout(repeat, delay);

  // Return a handle to clearInterval
  return {
    clear: () => {
      active = false;
    },
  };
};

global.clearInterval = function (handle) {
  if (handle && typeof handle.clear === "function") {
    handle.clear();
  }
};
