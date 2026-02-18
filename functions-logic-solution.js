const debounce = (fn, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const throttle = (fn, limit) => {
  let last = 0;

  return (...args) => {
    const now = Date.now();

    if (now - last >= limit) {
      last = now;
      fn(...args);
    }
  };
};


const memoize = fn => {
  const cache = {};

  return arg => {
    if (cache[arg]) return cache[arg];
    return (cache[arg] = fn(arg));
  };
};

// Example
const square = memoize(x => x * x);


// currying
const sum = a => b => c => a + b + c;

console.log(sum(1)(2)(3));

// map polyfill
Array.prototype.myMap = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

Array.prototype.myFilter = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

Function.prototype.myCall = function(context, ...args) {
  context = context || globalThis;
  context.fn = this;

  const result = context.fn(...args);
  delete context.fn;

  return result;
};

Function.prototype.myApply = function(context, args = []) {
  context = context || globalThis;
  context.fn = this;

  const result = context.fn(...args);
  delete context.fn;

  return result;
};
