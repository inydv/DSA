function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
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

Promise.allSettled([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Question"),
  shareTheVideo("Javascript Interview Question"),
]).then((res) => console.log("------- PROMISE All Settled -------- : ", res));

// This method takes an iterable of promises and returns a single promise that resolves as soon as any one of the promises in the iterable resolves. If all of the promises reject, Promise.any rejects with an AggregateError containing all the rejection reasons.
Promise.any([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Question"),
  shareTheVideo("Javascript Interview Question"),
]).then((res) => console.log("------- PROMISE ANY -------- : ", res));

// scenarios where you only care about the first result, regardless of whether it's a success or failure
Promise.race([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Question"),
  shareTheVideo("Javascript Interview Question"),
])
  .then((res) => console.log("------- PROMISE RACE -------- : ", res))
  .catch((err) => console.log("------- PROMISE RACE ERROR -------- : ", err));
