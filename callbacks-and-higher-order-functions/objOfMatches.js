// ADD CODE HERE
function objOfMatches(arr1, arr2, callback) {
  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    if (callback(arr1[i]) == arr2[i]) {
      obj[arr1[i]] = arr2[i];
    }
  }

  return obj;
}
// Uncomment these to check your work!
const arr1 = ["hi", "howdy", "bye", "later", "hello"];
const arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];
function uppercaser(str) {
  return str.toUpperCase();
}
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
