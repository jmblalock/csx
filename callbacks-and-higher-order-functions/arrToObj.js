function arrToObj(array, callback) {
  // ADD CODE HERE
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = callback(array[i]);
  }

  return obj;
}

// Uncomment these to check your work!
const arrOfStrings = ["beer", "glue"];
const capitalize = (str) => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
