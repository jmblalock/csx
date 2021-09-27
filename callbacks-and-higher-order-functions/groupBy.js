// ADD CODE HERE
function groupBy(arr, cb) {
  const obj = {};

  arr.forEach((el, i) => {
    const currentEl = arr[i];
    const evaluated = cb(el);

    if (!obj[evaluated]) obj[evaluated] = [currentEl];
    else obj[evaluated].push(currentEl);
  });

  return obj;
}
// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
