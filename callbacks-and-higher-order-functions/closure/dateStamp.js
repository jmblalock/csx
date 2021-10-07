// ADD CODE HERE
function dateStamp(cb) {
  var today = new Date().toDateString();

  function f(...args) {
    var obj = {};
    obj["date"] = `${today}`;
    obj["output"] = cb(...args);
    return obj;
  }
  return f;
}
// Uncomment these to check your work!
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
