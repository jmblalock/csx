// ADD CODE HERE
function censor() {
  var storage = {};

  function f(str1, str2) {
    if (str2) {
      storage[str1] = str2;
      return;
    }
    for (const [k, v] of Object.entries(storage)) {
      str1 = str1.replace(k, v);
    }
    return str1;
  }

  return f;
}
// Uncomment these to check your work!
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // should log: 'The slow, brown fox jumps over the lazy cats.'
