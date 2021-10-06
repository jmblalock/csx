// ADD CODE HERE
function after(xMany, cb) {
  var counter = 1;
  function f(x) {
    if (counter >= xMany) return cb(x);
    counter++;
    return undefined;
  }
  return f;
}

const called = function (string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> 'hello world' is printed
