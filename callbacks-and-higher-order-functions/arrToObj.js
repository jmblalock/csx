function arrToObj(array, callback) {
  // ADD CODE HERE
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = callback(array[i]);
  }

  return obj;
}

function arrToObj(array, callback) {
  // ADD CODE HERE
  const result = {};

  for (let e of array) {
    result[e] = callback(e);
  }

  return result;
}

// Uncomment these to check your work!
const arrOfStrings = ["beer", "glue"];
const capitalize = (str) => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
