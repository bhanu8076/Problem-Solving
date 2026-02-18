function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  var copy = Array.isArray(obj) ? [] : {};

  for (var key in obj) {
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}

// Example
var obj = { a: 1, b: { c: 2 } };
var cloned = deepClone(obj);
console.log(cloned);

// Deep compare two objects (no prototypes)
function deepEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== "object" || typeof b !== "object" ||
      a === null || b === null) {
    return false;
  }

  for (var key in a) {
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }

  for (var key2 in b) {
    if (!(key2 in a)) {
      return false;
    }
  }

  return true;
}

// Example
console.log(deepEqual(
  { a: 1, b: { c: 2 } },
  { a: 1, b: { c: 2 } }
));

// Flatten a nested object

function flattenObject(obj, parent, result) {
  parent = parent || "";
  result = result || {};

  for (var key in obj) {
    var newKey = parent ? parent + "." + key : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

console.log(flattenObject({ a: { b: { c: 2 } } }));


function objectToArray(obj) {
  var result = [];

  for (var key in obj) {
    result.push([key, obj[key]]);
  }

  return result;
}

// Example
console.log(objectToArray({ a:1, b:2 }));


function removeNullUndefined(obj) {
  var result = {};

  for (var key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }

  return result;
}

// Example
console.log(removeNullUndefined({
  a: 1,
  b: null,
  c: 2,
  d: undefined
}));

function findPath(obj, value, path) {
  path = path || "";

  for (var key in obj) {
    var newPath = path ? path + "." + key : key;

    if (obj[key] === value) {
      console.log(newPath);
      return true;
    }

    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (findPath(obj[key], value, newPath)) {
        return true;
      }
    }
  }

  return false;
}

// Example
findPath({ a:{ b:{ c:2 } }, d:3 }, 2);
