// pollyfill logic promise.all

const myPromiseAll = promises => {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(res => {
          results[i] = res;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};


// Retry a promise N times on failure
const retry = (fn, retries) => {
  return new Promise((resolve, reject) => {
    const attempt = n => {
      fn()
        .then(resolve)
        .catch(err => {
          if (n === 0) reject(err);
          else attempt(n - 1);
        });
    };

    attempt(retries);
  });
};

// Sequential execution of promises

const runSequential = async tasks => {
  for (let task of tasks) {
    await task();
  }
};

runSequential([
  () => fetch("url1"),
  () => fetch("url2"),
  () => fetch("url3")
]);
