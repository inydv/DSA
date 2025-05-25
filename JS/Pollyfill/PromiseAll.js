function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} video`);
    }, 1000);
  });
}

/*
Promise.all([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Question"),
  shareTheVideo("Javascript Interview Question"),
]).then((res) => console.log(res));
*/

Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];

    if (!promises.length) {
      resolve(results);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((res) => {
        results[idx] = res;
        pending--;

        if (pending === 0) resolve(results);
      }, reject);
    });
  });
};
