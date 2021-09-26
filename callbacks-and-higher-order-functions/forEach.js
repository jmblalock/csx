function forEach(arr, cb){
  for (e of arr) {
    cb(e);
  }
}

function map(arr, cb){
  let result = [];

  forEach(arr, e => {
    result.push(cb(e));
  });

  return result;
}

console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]