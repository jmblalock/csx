// ADD CODE HERE
function countBy(arr, cb) {
  const obj = {};

  arr.forEach((el, i) => {
    const evaluated = cb(el);
    if (!obj[evaluated]) obj[evaluated] = 0;
    obj[evaluated] += 1;
  });

  return obj;
}
// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return "even";
  else return "odd";
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
