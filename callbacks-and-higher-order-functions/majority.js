// ADD CODE HERE
function majority(array, callback) {
  let count = 0;
  let majority = false;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) == true) count += 1;
  }

  if (count > array.length / 2) majority = true;
  return majority;
}
// Uncomment these to check your work!
const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
