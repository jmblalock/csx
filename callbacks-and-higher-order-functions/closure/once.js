// ADD CODE HERE
function once(cb) {
  var ran = false;
  var memo;

  function f(num) {
    if (ran) return memo;
    ran = true;
    memo = cb(num);
    return memo;
  }

  return f;
}

const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7
