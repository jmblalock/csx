// ADD CODE HERE
function reduce(arr, cb, initial){
	let memo = initial;
  
  for (let i = 0; i < arr.length; i++) {
    memo = cb(memo, arr[i]);
  }
  
  return memo;
}
// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8