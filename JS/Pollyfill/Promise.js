// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject({ Data: { name: "Lokesh" } });
//   }, 5000);
// });

// promise
//   .then((res) => console.log(res))
//   .catch((err) => console.log("err:", err));

function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isResolved = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isResolved = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function" && !isCalled) {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (cb) {
    onResolve = cb;
    if (isResolved && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (cb) {
    onReject = cb;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  this.finally = function (cb) {
    if ((isResolved || isRejected) && !isCalled) {
      cb();
      isCalled = true;
    } else {
      const prevOnResolve = onResolve;
      const prevOnReject = onReject;
      onResolve = function (val) {
        if (typeof prevOnResolve === "function") prevOnResolve(val);
        cb();
      };
      onReject = function (val) {
        if (typeof prevOnReject === "function") prevOnReject(val);
        cb();
      };
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const myPromise = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("✅ Success!");
    } else {
      reject("❌ Error!");
    }
  }, 1000);
});

myPromise
  .then((res) => {
    console.log("Resolved:", res);
  })
  .catch((err) => {
    console.log("Rejected:", err);
  })
  .finally(() => {
    console.log("Promise finished!");
  });
